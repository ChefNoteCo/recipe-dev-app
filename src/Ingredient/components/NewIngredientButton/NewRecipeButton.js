import React from 'react';
import { Button } from 'react-native-elements';

const NewIngredientButton = ({ onPress }) => {
  return <Button title="New Ingredient" onPress={onPress} type="clear" />;
};

export default NewIngredientButton;
