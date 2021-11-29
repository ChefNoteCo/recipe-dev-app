import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

export const RecipeIngredientList = ({ ingredients }) => {
  const ingredientText = ingredients.map((ingredient, index) => {
    return (
      <Text key={`${ingredient.name}_${index}`} style={styles.item}>
        {ingredient.quantity} {ingredient.unit} {ingredient.name}
      </Text>
    );
  });

  return (
    <View style={styles.section}>
      <Text h4>Ingredients</Text>
      {ingredientText}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 25,
  },
  item: {
    padding: 5,
  },
});
