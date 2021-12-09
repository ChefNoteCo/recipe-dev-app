import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import InstructionForm from '../../components/InstructionForm/InstructionForm';
import RecipeIngredientForm from '../IngredientForm/IngredientFormNew';
import MetadataForm from './MetadataForm';
import {
  addOrRemoveIngredientsToRecipe,
  addOrRemoveInstructionsToRecipe,
  alreadySelected,
} from './formManagement';

const RecipeForm = ({
  recipe,
  allIngredients,
  loadingIngredients,
  onSave,
  onCancel,
}) => {
  const [draftRecipe, setDraftRecipe] = useState(recipe);
  const [showIngredientModal, setIngredientModal] = useState(false);
  const [instructionFieldFocused, setInstructionFieldFocused] = useState(false);

  const addIngredientsToRecipe = selectedIngredient => {
    const updatedRecipe = addOrRemoveIngredientsToRecipe(
      draftRecipe,
      selectedIngredient
    );
    setRecipeState(updatedRecipe);
  };

  const addInstructionToRecipe = instructionText => {
    debugger;
    const updatedRecipe = addOrRemoveInstructionsToRecipe(draftRecipe, {
      label: instructionText,
    });
    setRecipeState(updatedRecipe);
  };

  const handleInstructionFocus = isFocused => {
    setInstructionFieldFocused(isFocused);
  };

  const removeInstructionFromRecipe = instructionId => {
    const updatedRecipe = addOrRemoveInstructionsToRecipe(draftRecipe, {
      id: instructionId,
    });
    setRecipeState(updatedRecipe);
  };

  const updateIngredientInfo = (ingredient, field, value) => {
    if (!value) {
      return;
    }
    const updatedRecipe = Object.assign({}, draftRecipe);
    const selected = alreadySelected(updatedRecipe.ingredients, ingredient.id);

    if (selected.alreadySelected) {
      updatedRecipe.ingredients[selected.index][field] = value;
    }
    setRecipeState(updatedRecipe);
  };

  const updateInstructionOrder = instructions => {
    const updatedRecipe = Object.assign({}, draftRecipe);
    updatedRecipe.instructions = instructions.data;
    setRecipeState(updatedRecipe);
  };

  const updateRecipeMetadata = (field, value) => {
    const updatedRecipe = Object.assign({}, draftRecipe);
    updatedRecipe[field] = value;
    setRecipeState(updatedRecipe);
  };

  const instructionStyle = instructionFieldFocused
    ? styles.instructionFormOnFocus
    : styles.instructionForm;
  return (
    <ScrollView style={styles.inputForm}>
      <View style={styles.metadataForm}>
        <MetadataForm recipe={recipe} onFieldChange={updateRecipeMetadata} />
      </View>
      <View style={styles.ingredientForm}>
        <Text h4>Ingredients</Text>
        <RecipeIngredientForm
          allIngredients={allIngredients}
          showModal={showIngredientModal}
          toggleModal={setIngredientModal}
          selectedIngredients={draftRecipe.ingredients}
          ingredientsLoading={loadingIngredients}
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
        <Button title="Cancel" onPress={onCancel} style={styles.submitButton} />
        <Button
          title="Save"
          onPress={() => onSave(draftRecipe)}
          style={styles.submitButton}
        />
      </View>
    </ScrollView>
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
export default RecipeForm;
