import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import InstructionForm from '../../components/InstructionForm/InstructionForm';
import LoadingScreen from '../../../app/components/LoadingScreen/LoadingScreen';
import MetadataForm from './MetadataForm';
import {
  addOrRemoveIngredientsToRecipe,
  addOrRemoveInstructionsToRecipe,
  alreadySelected,
} from '../RecipeForm/formManagement';

const RecipeForm = ({ recipe, onMetadataChange }) => {
  const instructionStyle = instructionFieldFocused
    ? styles.instructionFormOnFocus
    : styles.instructionForm;
  return (
    <LoadingScreen loading={recipeLoading}>
      <ScrollView style={styles.inputForm}>
        <View style={styles.metadataForm}>
          <MetadataForm recipe={recipe} onFieldChange={onMetadataChange} />
        </View>
        <View style={styles.ingredientForm}>
          <Text h4>Ingredients</Text>
          <RecipeIngredientForm
            allIngredients={ingredients}
            showModal={ingredientModalVisible}
            toggleModal={setIngredientModalVisible}
            selectedIngredients={draftRecipe.ingredients}
            ingredientsLoading={ingredientLoading}
            onAddIngredient={addIngredientsToRecipe}
            onChange={updateIngredientInfo}
          />
        </View>
        <View style={instructionStyle}>
          <Text h4>Instructions</Text>
          <InstructionForm
            instructions={draftRecipe.instructions}
            onDragEnd={updateInstructionOrder}
            onDelete={removeInstructionFromRecipe}
            onAdd={addInstructionToRecipe}
            onFocus={() => handleInstructionFocus(true)}
            onBlur={() => handleInstructionFocus(false)}
          />
        </View>
        <View style={styles.formButtons}>
          <Button
            title="Cancel"
            onPress={() => navigation.navigate('RecipeList')}
            style={styles.submitButton}
          />
          <Button
            title="Save"
            onPress={saveNewRecipe}
            style={styles.submitButton}
          />
        </View>
      </ScrollView>
    </LoadingScreen>
  );
};

const styles = StyleSheet.create({
  formButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 25,
  },
  ingredientForm: {
    marginTop: 15,
    padding: 10,
  },
  inputForm: {
    padding: 10,
  },
  instructionForm: {
    padding: 10,
  },
  instructionFormOnFocus: {
    padding: 10,
    marginBottom: 150,
  },
  metadataForm: {
    marginTop: 10,
  },
  submitButton: {
    width: 150,
  },
});
export default EditRecipe;
