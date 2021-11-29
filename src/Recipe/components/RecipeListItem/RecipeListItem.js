import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import theme from '../../../app/theme';

const RecipeListItem = ({ onPress, recipe }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.35}
      underlayColor={theme.colors.lightGreen}
      style={styles.recipeTouchable}
      onPress={onPress}
    >
      <Text>{recipe.name}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  recipeTouchable: {
    padding: 15,
  },
});

export default RecipeListItem;
