import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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

  const updateRecipeMetadata = metadata => {
    const updatedRecipe = Object.assign({}, draftRecipe);
    updatedRecipe.name = metadata;
    setRecipeState(updatedRecipe);
  };

  const saveNewRecipe = () => {
    dispatch(saveRecipe(draftRecipe));
    navigation.navigate('Home');
  };

  return (
    <ScrollView>
      <Text>New Recipe</Text>
      <TextInput
        value={draftRecipe.name}
        onChangeText={updateRecipeMetadata}
        placeholder="Recipe Name"
        style={styles.metadataInput}
      />
      <Text>Ingredients</Text>
      <CurrentIngredientList ingredients={draftRecipe.ingredients} />
      <Button
        title="Add Ingredient"
        onPress={() => setIngredientModalVisible(true)}
      />
      <Button title="Cancel" onPress={() => navigation.navigate('Home')} />
      <Button title="Save" onPress={saveNewRecipe} />
      <FindIngredient
        modalVisible={ingredientModalVisible}
        closeModal={setIngredientModalVisible}
        addIngredientFn={addIngredientsToRecipe}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  metadataInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default RecipeForm;
