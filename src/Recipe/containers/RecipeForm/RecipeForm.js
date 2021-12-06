import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Text } from 'react-native-elements';
import FindIngredient from '../../components/FindIngredient/FindIngredient';
import IngredientForm from '../../components/IngredientForm/IngredientForm';
import InstructionForm from '../../components/InstructionForm/InstructionForm';
import { saveRecipe } from '../../state/recipes';
import { Ingredient, Instruction, Recipe } from '../../models';
import {
  addOrRemoveIngredientsToRecipe,
  addOrRemoveInstructionsToRecipe,
  alreadySelected,
} from './formManagement';
import { fetchAllIngredients } from '../../../Ingredient/state/ingredients';

const RecipeForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients.all);
  const ingredientLoading = useSelector(state => state.ingredients.loading);

  useEffect(() => {
    if (ingredientLoading) {
      dispatch(fetchAllIngredients());
    }
  });

  let defaultState = Recipe({});

  const [draftRecipe, setRecipeState] = useState(defaultState);
  const [ingredientModalVisible, setIngredientModalVisible] = useState(false);
  const [instructionFieldFocused, setInstructionFieldFocused] = useState(false);

  const addIngredientsToRecipe = selectedIngredient => {
    const updatedRecipe = addOrRemoveIngredientsToRecipe(
      draftRecipe,
      selectedIngredient
    );
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

  const addInstructionToRecipe = instructionText => {
    const instruction = Instruction({ label: instructionText });
    const updatedRecipe = addOrRemoveInstructionsToRecipe(
      draftRecipe,
      instruction
    );
    setRecipeState(updatedRecipe);
  };

  const removeInstructionFromRecipe = instructionId => {
    const updatedRecipe = addOrRemoveInstructionsToRecipe(draftRecipe, {
      id: instructionId,
    });
    setRecipeState(updatedRecipe);
  };

  const updateRecipeMetadata = (field, value) => {
    const updatedRecipe = Object.assign({}, draftRecipe);
    updatedRecipe[field] = value;
    setRecipeState(updatedRecipe);
  };

  const handleInstructionFocus = isFocused => {
    setInstructionFieldFocused(isFocused);
  };

  const saveNewRecipe = () => {
    dispatch(saveRecipe(draftRecipe)).then(() => {
      navigation.navigate('RecipeDetail', { id: draftRecipe.id });
    });
  };

  const instructionStyle = instructionFieldFocused
    ? styles.instructionFormOnFocus
    : styles.instructionForm;
  return (
    <ScrollView style={styles.inputForm}>
      <View style={styles.metadataForm}>
        <Input
          value={draftRecipe.name}
          onChangeText={val => updateRecipeMetadata('name', val)}
          placeholder="Recipe Name"
        />
        <Input
          value={draftRecipe.servings}
          onChangeText={val => updateRecipeMetadata('servings', val)}
          placeholder="Servings"
          keyboardType="number-pad"
        />
        <Input
          value={draftRecipe.prepTime}
          onChangeText={val => updateRecipeMetadata('prepTime', val)}
          placeholder="Prep Time (minutes)"
          keyboardType="number-pad"
        />
        <Input
          value={draftRecipe.cookTime}
          onChangeText={val => updateRecipeMetadata('cookTime', val)}
          placeholder="Cook Time (minutes)"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.ingredientForm}>
        <Text h4>Ingredients</Text>
        <IngredientForm
          ingredients={draftRecipe.ingredients}
          onChange={updateIngredientInfo}
        />
        <Button
          title="Add Ingredient"
          onPress={() => setIngredientModalVisible(true)}
          type="clear"
          disabled={ingredientLoading}
        />
        <FindIngredient
          allIngredients={ingredients}
          modalVisible={ingredientModalVisible}
          closeModal={setIngredientModalVisible}
          addIngredientFn={addIngredientsToRecipe}
          selectedIngredients={draftRecipe.ingredients}
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
