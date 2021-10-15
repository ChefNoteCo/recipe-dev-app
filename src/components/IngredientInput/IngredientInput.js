import React from 'react';
import { StyleSheet, View } from 'react-native';

const IngredientInput = () => {
  return (
    <TextInput 
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  ingredientModal: {
    margin: 20,
    padding: 50,
    backgroundColor: 'white',
  },
});

export default IngredientInput;
