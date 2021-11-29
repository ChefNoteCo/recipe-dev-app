import React from 'react';
import { Text } from 'react-native-elements';

export const RecipeIngredientList = ({ ingredients }) => {
  console.log('ingredients', ingredients);
  const ingredientText = ingredients.map(ingredient => {
    return <Text>{ingredient.name}</Text>;
  });
  return (
    <>
      <Text h4>Ingredients</Text>
      {ingredientText}
    </>
  );
};
