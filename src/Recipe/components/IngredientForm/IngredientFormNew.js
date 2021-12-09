import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import MeasurementUnitPicker from '../../../app/components/MeasurementUnitPicker/MeasurementUnitPicker';

const IngredientField = ({ ingredient, onChange }) => {
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

const RecipeIngredientForm = ({ ingredients, onAddIngredient, onChange }) => {
  const currentList = ingredients.map(ingredient => (
    <IngredientField ingredient={ingredient} onChange={onChange} />
  ));

  return <>{currentList}</>;
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
