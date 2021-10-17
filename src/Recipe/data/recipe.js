import { Recipe } from '../models';
import LocalStorage from '../../app/data/localstorage.js';

class RecipesAPI {
  constructor(db) {
    this.db = db;
    this.path = `recipes`;
  }

  async get(id) {
    return await this.db.get(this.path);
  }

  async list() {
    return await this.db.list(this.path);
  }

  async save(data) {
    const recipe = Recipe(data);
    const savePath = `${this.path}/${recipe.id}`;

    await this.db.save(savePath, data);

    return recipe;
  }

  static parser() {
    return {
      getParse: (data, args) => {
        /* Data shape is { id: Recipe } */
        const jsonData = JSON.parse(data);
        const requestedId = args[0];

        const filteredRecipes = jsonData.filter(
          value => value.id == requestedId
        );
        return filteredRecipes[0];
      },
      listParse: (data, args) => {
        /* Input shape is { id: Recipe } */
        /* Output shape should be [Recipe] */
        if (data) {
          const parsedData = JSON.parse(data);
          const keys = Object.keys(parsedData);
          const resultsArray = [];
          keys.forEach(key => {
            resultsArray.push(parsedData[key]);
          });
          return resultsArray;
        } else {
          return [];
        }
      },
    };
  }
}

const dataConnection = new LocalStorage(RecipesAPI.parser());
const recipesData = new RecipesAPI(dataConnection);

export default recipesData;
