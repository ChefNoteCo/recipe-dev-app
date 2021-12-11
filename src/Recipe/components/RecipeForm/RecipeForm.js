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
import { Ingredient, Instruction } from '../../models';

const RecipeForm = ({
  recipe,
  allIngredients,
  loadingIngredients,
  onSave,
  onCancel,
}) => {
  return (
    <Formik initialValues={recipe} onSubmit={values => onSave(values)}>
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
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
            <View style={styles.instructionForm}>
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
