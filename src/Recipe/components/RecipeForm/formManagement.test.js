import {
  addOrRemoveIngredientsToRecipe,
  addOrRemoveInstructionsToRecipe,
} from './formManagement';
const cloneDeep = require('lodash.clonedeep');

const recipe = {
  id: 'recipe123',
  name: 'cookies',
  ingredients: [
    {
      id: 'ingredient987',
      name: 'flour',
      quantity: 1,
      unit: 'cup',
    },
  ],
  instructions: [],
};

describe('#addOrRemoveIngredientsToRecipe', () => {
  const selectedIngredient = {
    id: 'ingredient456',
    name: 'chocolate chips',
    quantity: 1,
    unit: 'cup',
  };
  describe('when an ingredient is already selected', () => {
    test('it removes an already selected ingredient', () => {
      const testRecipe = cloneDeep(recipe);
      const testSelectedIngredient = cloneDeep(selectedIngredient);

      testRecipe.ingredients.push(selectedIngredient);
      const copy = addOrRemoveIngredientsToRecipe(
        testRecipe,
        testSelectedIngredient
      );
      expect(copy.ingredients.length).toBe(recipe.ingredients.length);
    });
  });

  describe('when the ingredient is not already selected', () => {
    test('it adds an ingredient', () => {
      const testRecipe = cloneDeep(recipe);
      const testSelectedIngredient = cloneDeep(selectedIngredient);

      const copy = addOrRemoveIngredientsToRecipe(
        testRecipe,
        testSelectedIngredient
      );
      expect(copy.ingredients.length).toBe(recipe.ingredients.length + 1);
    });
  });
});

describe('#addOrRemoveInstructionsToRecipe', () => {
  describe('when an instruction has already been added', () => {
    test('it removes an already added instruction', () => {
      const testRecipe = cloneDeep(recipe);
      const testInstruction = { id: '1234', label: 'Do a thing' };
      testRecipe.instructions.push(testInstruction);

      const copy = addOrRemoveInstructionsToRecipe(testRecipe, testInstruction);
      expect(copy.instructions.length).toBe(recipe.instructions.length);
    });
  });

  describe('when the instruction is not already added', () => {
    test('it adds the instruction', () => {
      const testRecipe = cloneDeep(recipe);
      const testInstruction = { id: '1234', label: 'Do a thing' };

      const copy = addOrRemoveInstructionsToRecipe(testRecipe, testInstruction);
      expect(copy.instructions.length).toBe(recipe.instructions.length + 1);
    });
  });
});
