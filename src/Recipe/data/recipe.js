import { Recipe } from '../models';
import LocalStorage from '../../app/data/localstorage.js';

class RecipesAPI {
  constructor(db) {
    this.db = db;
    this.path = `recipes`;
  }

  async get(id) {
    return await this.db.get(this.path, id).then(Recipe);
  }

  async list() {
    return await this.db.list(this.path);
  }

  async save(data) {
    const recipe = Recipe(data);
    const savePath = `${this.path}/${recipe.id}`;

    try {
      const result = await this.db.save(savePath, recipe);
      return recipe;
    } catch (err) {
      console.log('Error saving to the API', err.message);
    }
  }

  /**
   * Provides a custom parser that can be used when requesting data from the data store
   * @returns { getParse, listParse }
   */
  static parser() {
    return {
      listParse: (data, args) => {
        /* Input shape is { id: Recipe } */
        /* Output shape should be [Recipe] */
        if (data) {
          const parsedData = JSON.parse(data);
          const keys = Object.keys(parsedData);
          const resultsArray = [];
          keys.forEach(key => {
            resultsArray.push(Recipe(parsedData[key]));
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
