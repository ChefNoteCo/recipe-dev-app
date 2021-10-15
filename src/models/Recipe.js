import Ingredient from './Ingredient';

const Recipe = ({
  id = '',
  name = '',
  ingredients = [],
  instructions = [],
}) => {
  const formatIngredients = (ingredients = []) => {
    return ingredients.map(Ingredient);
  };

  return {
    id,
    name,
    ingredients: formatIngredients(ingredients),
    instructions: instructions || [],
  };
};

export default Recipe;
