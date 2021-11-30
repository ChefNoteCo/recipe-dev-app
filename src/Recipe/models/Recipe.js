import { nanoid } from 'nanoid/non-secure';
import { sortDescending } from '../../app/helpers/sortOrder';
import Ingredient from './Ingredient';

const Recipe = ({
  id = nanoid(),
  name = '',
  prepTime = 0,
  cookTime = 0,
  servings = 0,
  ingredients = [],
  instructions = [],
}) => {
  const formatIngredients = (ingredients = []) => {
    return ingredients.map(Ingredient);
  };

  // instructions = [{ order: Number, description: String }]
  const formatInstructions = (instructions = []) => {
    return instructions.sort(sortDescending('order'));
  };

  return {
    id,
    name,
    prepTime,
    cookTime,
    servings,
    ingredients: formatIngredients(ingredients),
    instructions: formatInstructions(instructions),
  };
};

export default Recipe;
