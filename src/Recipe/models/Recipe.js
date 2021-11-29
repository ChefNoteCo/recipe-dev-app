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

  /**
   *
   * @param {string} format The format to display the time
   * @returns string representation of the formatted time
   */
  const formatTime = (time = 0, format) => {
    switch (format) {
      case 'hours':
        return `${time / 60} hours`;
      default:
        // Minutes
        return `${time} minutes`;
    }
  };

  console.log(formatInstructions());
  return {
    id,
    name,
    prepTime: formatTime(prepTime, 'minutes'),
    cookTime: formatTime(cookTime, 'minutes'),
    servings,
    ingredients: formatIngredients(ingredients),
    instructions: formatInstructions(instructions),
  };
};

export default Recipe;
