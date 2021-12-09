import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';
import MeasurementUnitPicker from '../../../app/components/MeasurementUnitPicker/MeasurementUnitPicker';
import FindIngredient from '../FindIngredient/FindIngredient';

const IngredientField = ({
  ingredient,
  ingredientsLoading,
  onChange,
  setIngredientModalVisible,
}) => {
  return (
    <View key={ingredient.id} style={styles.listItem}>
      <TextInput
        onChangeText={val => {
          onChange(ingredient, 'quantity', val);
        }}
        placeholder="qty"
        style={styles.quantityInput}
      />
      <MeasurementUnitPicker
        onSelectValue={val => {
          onChange(ingredient, 'unit', val);
        }}
        style={styles.unitInput}
      />
      <Text style={styles.ingredientName}>{ingredient.name}</Text>
    </View>
  );
};

const RecipeIngredientForm = ({
  allIngredients,
  selectedIngredients,
  ingredientsLoading,
  onAddIngredient,
  onChange,
  showModal,
  toggleModal,
}) => {
  const currentList = selectedIngredients.map(ingredient => (
    <IngredientField ingredient={ingredient} onChange={onChange} />
  ));

  return (
    <View>
      {currentList}
      <Button
        title="Add Ingredient"
        onPress={() => toggleModal(true)}
        type="clear"
        disabled={ingredientsLoading}
      />
      <FindIngredient
        allIngredients={allIngredients}
        modalVisible={showModal}
        closeModal={() => toggleModal(false)}
        addIngredientFn={onAddIngredient}
        selectedIngredients={selectedIngredients}
      />
    </View>
  );
};

export default RecipeIngredientForm;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  ingredientName: {
    flex: 4,
    fontSize: 15,
  },
  quantityInput: {
    flex: 1,
    fontSize: 15,
  },
  unitInput: {
    flex: 1,
    fontSize: 15,
  },
});
