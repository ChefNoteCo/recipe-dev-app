import React from 'react';
import { Button } from 'react-native';

const EditRecipeButton = ({ onPress }) => {
  return <Button title="Edit Recipe" onPress={onPress} />;
};

export default EditRecipeButton;
