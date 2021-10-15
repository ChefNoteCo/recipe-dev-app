import React from 'react';
import { Text } from 'react-native';

const CurrentIngredientList = ({ ingredients }) => {
  const currentList = ingredients.map(ingredient => {
    return <Text key={ingredient.id}>{ingredient.name}</Text>;
  });

  return <>{currentList}</>;
};

export default CurrentIngredientList;
