import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RecipeName, RecipeServings, RecipeTime } from './MetadataComponents';
import { formatTime } from '../../../app/helpers/formatTime';

const RecipeMetadata = ({ recipe }) => {
  // const tabs = [
  //   {
  //     name: 'Recipe',
  //     component: (
  //       <>
  //         <RecipeIngredientList ingredients={recipe.ingredients} />
  //         <RecipeInstructionList instructions={recipe.instructions} />
  //       </>
  //     ),
  //   },
  // ];
  return (
    <View style={styles.section}>
      <RecipeName name={recipe.name} />
      <View style={styles.metadata}>
        <RecipeTime
          prepTime={formatTime(recipe.prepTime, 'minutes')}
          cookTime={formatTime(recipe.cookTime, 'minutes')}
        />
        <RecipeServings servings={recipe.servings} />
      </View>
    </View>
  );
};

export default RecipeMetadata;

const styles = StyleSheet.create({
  section: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  metadata: {
    marginTop: 20,
  },
});
