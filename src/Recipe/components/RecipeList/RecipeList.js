import React from 'react';
import { FlatList, Text } from 'react-native';
import RecipeListItem from '../RecipeListItem/RecipeListItem';

const RecipeList = ({ title, recipes, navigateFn }) => {
  return (
    <FlatList
      ListHeaderComponent={<Text>{title}</Text>}
      data={recipes}
      renderItem={({ item }) => {
        return (
          <RecipeListItem
            recipe={item}
            onPress={() => navigateFn('RecipeDetail', { id: item.id })}
          />
        );
      }}
    />
  );
};

export default RecipeList;
