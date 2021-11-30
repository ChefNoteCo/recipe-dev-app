import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Text } from 'react-native-elements';
import FindIngredient from '../../components/FindIngredient/FindIngredient';
import CurrentIngredientList from '../../components/CurrentIngredientList/CurrentIngredientList';
import { saveRecipe } from '../../state/recipes';
import { Recipe } from '../../models';

const RecipeForm = ({ navigation }) => {
  const dispatch = useDispatch();
  let defaultState = Recipe({});

  const [draftRecipe, setRecipeState] = useState(defaultState);
  const [ingredientModalVisible, setIngredientModalVisible] = useState(false);

  const addIngredientsToRecipe = ingredient => {
    const updatedRecipe = Object.assign({}, draftRecipe);
    updatedRecipe.ingredients.push(ingredient);
    setRecipeState(updatedRecipe);
  };

  const updateRecipeMetadata = (field, value) => {
    const updatedRecipe = Object.assign({}, draftRecipe);
    updatedRecipe[field] = value;
    setRecipeState(updatedRecipe);
  };

  const saveNewRecipe = () => {
    dispatch(saveRecipe(draftRecipe));
    navigation.navigate('RecipeList');
  };

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
        <CurrentIngredientList ingredients={draftRecipe.ingredients} />
        <Button
          title="Add Ingredient"
          onPress={() => setIngredientModalVisible(true)}
          type="clear"
        />
        <FindIngredient
          modalVisible={ingredientModalVisible}
          closeModal={setIngredientModalVisible}
          addIngredientFn={addIngredientsToRecipe}
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
  },
  ingredientForm: {
    marginTop: 15,
  },
  inputForm: {
    padding: 10,
  },
  metadataForm: {
    marginTop: 10,
  },
  submitButton: {
    width: 150,
  },
});
export default RecipeForm;
