import React, { useState } from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Formik, FieldArray } from 'formik';
import InstructionForm from '../../components/InstructionForm/InstructionForm';
import RecipeIngredientForm from '../IngredientForm/IngredientFormNew';
import MetadataForm from './MetadataForm';
import {
  addOrRemoveIngredientsToRecipe,
  addOrRemoveInstructionsToRecipe,
  alreadySelected,
} from './formManagement';
import { Ingredient, Instruction } from '../../models';

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
    <Formik initialValues={recipe} onSubmit={values => onSave(values)}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <ScrollView style={styles.inputForm}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={styles.metadataForm}>
              <Input
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Recipe Name"
              />
              <Input
                value={values.servings}
                onChangeText={handleChange('servings')}
                onBlur={handleBlur('servings')}
                placeholder="Servings"
                keyboardType="number-pad"
              />
              <Input
                value={values.prepTime}
                onChangeText={handleChange('prepTime')}
                onBlur={handleBlur('prepTime')}
                placeholder="Prep Time (minutes)"
                keyboardType="number-pad"
              />
              <Input
                value={values.cookTime}
                onChangeText={handleChange('cookTime')}
                onBlur={handleBlur('cookTime')}
                placeholder="Cook Time (minutes)"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.ingredientForm}>
              <Text h4>Ingredients</Text>
              <FieldArray
                name="ingredients"
                render={({ insert, remove, push }) => (
                  <RecipeIngredientForm
                    allIngredients={allIngredients}
                    selectedIngredients={values.ingredients}
                    showModal={showIngredientModal}
                    toggleModal={setIngredientModal}
                    ingredientsLoading={loadingIngredients}
                    onAddItem={() => {
                      const defaultIngredient = Ingredient({});
                      return push(defaultIngredient);
                    }}
                    onBlur={(item, value) => setFieldValue(item, value)}
                    onChange={(item, value) => setFieldValue(item, value)}
                    onDeleteItem={remove}
                  />
                )}
              />
            </View>
            <View style={instructionStyle}>
              <Text h4>Instructions</Text>
              <FieldArray
                name="instructions"
                render={({ insert, remove, push }) => (
                  <InstructionForm
                    instructions={values.instructions}
                    onChange={handleChange}
                    onAddItem={() => {
                      const defaultInstruction = Instruction({});
                      return push(defaultInstruction);
                    }}
                    onDeleteItem={remove}
                    onBlur={handleBlur}
                  />
                )}
              />
            </View>
            <View style={styles.formButtons}>
              <Button
                title="Cancel"
                onPress={onCancel}
                style={styles.submitButton}
              />
              <Button
                title="Save"
                onPress={handleSubmit}
                style={styles.submitButton}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
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
