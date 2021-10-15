import React from 'react';
import { Button } from 'react-native';

const NewRecipeButton = ({ onPress }) => {
  return <Button title="New Recipe" onPress={onPress} />;
};

export default NewRecipeButton;
