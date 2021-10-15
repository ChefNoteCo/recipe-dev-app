// import { Recipe } from '../models';
// import LocalStorage from './db';

// const recipeParser = {
//   getParse: (data, args) => {
//     /* Data shape is [Recipe] */
//     const jsonData = JSON.parse(data);
//     const requestedId = args[0];

//     const filteredRecipes = jsonData.filter(value => value.id == requestedId);
//     return filteredRecipes[0];
//   },
//   listParse: (data, args) => {
//     if (data) {
//       return JSON.parse(data);
//     } else {
//       return [];
//     }
//   },
// };

// class RecipesAPI {
//   constructor(db) {
//     this.db = db;

//     this.get = get;
//   }

//   async get(id) {
//     return await this.db.get(id);
//   }

//   async save(data) {
//     const recipe = Recipe(data);

//     await this.db.save(recipe.id, data);

//     return recipe;
//   }
// }

// const dataConnection = new LocalStorage(recipeParser);
// const recipesData = new RecipesAPI(dataConnection);

// export default recipesData;
