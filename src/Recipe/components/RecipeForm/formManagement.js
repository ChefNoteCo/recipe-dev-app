import { Ingredient } from '../../models';
import { BaseInstruction } from '../../../app/models';

export const indexOfItem = (items, itemId) => {
  return items.findIndex(i => i.id === itemId);
};
export const alreadySelected = (items, itemId) => {
  const index = indexOfItem(items, itemId);
  return { index, isSelected: index !== -1 };
};

export const addOrRemoveIngredientsToRecipe = (
  currentRecipeState,
  selectedIngredient
) => {
  const recipeCopy = Object.assign({}, currentRecipeState);
  const selected = alreadySelected(
    recipeCopy.ingredients,
    selectedIngredient.id
  );

  if (selected.isSelected) {
    // Remove it from ingredients
    recipeCopy.ingredients.splice(selected.index, 1);
  } else {
    const ingredient = Ingredient(selectedIngredient);
    recipeCopy.ingredients.push(ingredient);
  }

  return recipeCopy;
};

export const addOrRemoveInstructionsToRecipe = (
  currentRecipeState,
  instruction
) => {
  const recipeCopy = Object.assign({}, currentRecipeState);
  const selected = alreadySelected(recipeCopy.instructions, instruction.id);

  if (selected.isSelected) {
    // Remove it from instructions
    recipeCopy.instructions.splice(selected.index, 1);
  } else {
    const formattedInstruction = BaseInstruction(instruction);
    recipeCopy.instructions.push(formattedInstruction);
  }

  return recipeCopy;
};
