import React from 'react';
import { Text } from 'react-native';

const RecipeListItem = ({ recipe }) => {
  return <Text>{recipe.name}</Text>;
};

export default RecipeListItem;
