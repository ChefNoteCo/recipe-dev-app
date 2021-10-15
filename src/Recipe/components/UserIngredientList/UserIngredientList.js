import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const UserIngredientList = ({ ingredients, onIngredientPress }) => {
  const userList = ingredients.map(ingredient => {
    return (
      <Pressable
        onPress={() => {
          onIngredientPress(ingredient);
        }}
      >
        <Text key={ingredient.id} style={styles.ingredientItem}>
          {ingredient.name}
        </Text>
      </Pressable>
    );
  });

  return <>{userList}</>;
};

const styles = StyleSheet.create({
  ingredientItem: {
    fontSize: 14,
    padding: 5,
  },
});

export default UserIngredientList;
