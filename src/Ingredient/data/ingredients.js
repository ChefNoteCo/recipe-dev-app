import { Ingredient } from '../models';
import LocalStorage from '../../app/data/localstorage';

class IngredientsAPI {
  constructor(db) {
    this.db = db;
    this.path = `ingredients`;
  }

  async list() {
    return await this.db.list(this.path);
  }

  async save(data) {
    const ingredient = Ingredient(data);
    const savePath = `${this.path}/${ingredient.id}`;

    await this.db.save(savePath, ingredient);

    return ingredient;
  }

  static parser() {
    return {
      getParse: (data, args) => {
        console.log('Currently a no-op');
        return JSON.parse(data);
      },
      listParse: (data, args) => {
        console.log('data', data);
        if (data) {
          const parsedData = JSON.parse(data);
          const keys = Object.keys(parsedData);
          const resultsArray = [];
          keys.forEach(key => {
            resultsArray.push(Ingredient(parsedData[key]));
          });
          return resultsArray;
        } else {
          return [];
        }
      },
    };
  }
}

const dataConnection = new LocalStorage(IngredientsAPI.parser());
const ingredientsData = new IngredientsAPI(dataConnection);

export default ingredientsData;
