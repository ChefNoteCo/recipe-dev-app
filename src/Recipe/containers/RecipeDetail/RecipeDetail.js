import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import RecipeMetadata from '../../components/RecipeMetadata/RecipeMetadata';
import { RecipeIngredientList } from '../../components/RecipeIngredientList/RecipeIngredientList';
import { RecipeInstructionList } from '../../components/RecipeInstructionList/RecipeInstructionList';

const RecipeDetail = ({ navigation, route }) => {
  const recipes = useSelector(state => state.recipes);

  // TODO: Use Thunk to get the specific recipe detail from storage
  // Currently state.recipes is an array, not an object so need to get it from storage
  // where it is in the appropriate shape
  const recipeId = route.params.id;
  const recipeDetail = recipes.all.filter(recipe => recipe.id === recipeId)[0];

  return (
    <View style={styles.recipeDetail}>
      <RecipeMetadata recipe={recipeDetail} />
      <View style={styles.recipeInstructions}>
        <RecipeIngredientList
          ingredients={recipeDetail.ingredients}
          // style={styles.instructionSections}
        />
        <RecipeInstructionList
          instructions={recipeDetail.instructions}
          style={styles.instructionSections}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeDetail: {
    marginTop: 15,
  },
  recipeInstructions: {
    marginTop: 15,
  },
  instructionSections: {
    marginBottom: 25,
  },
});

export default RecipeDetail;