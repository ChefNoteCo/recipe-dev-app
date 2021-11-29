import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tab, TabView, Text } from 'react-native-elements';

export const RecipeName = ({ name }) => {
  return (
    <Text h2 style={{ fontSize: 18 }}>
      {name}
    </Text>
  );
};

export const RecipeTime = ({ prepTime, cookTime }) => {
  return (
    <View style={styles.times}>
      <Text>Prep Time: {prepTime}</Text>
      <Text>Cook Time: {cookTime}</Text>
    </View>
  );
};

export const RecipeServings = ({ servings }) => {
  return (
    <>
      <Text>Serves: {servings}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  times: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontWeight: 'bold',
  },
});
