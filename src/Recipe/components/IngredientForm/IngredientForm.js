import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import MeasurementUnitPicker from '../MeasurementUnitPicker/MeasurementUnitPicker';

const IngredientForm = ({ ingredients, onChange }) => {
  const currentList = ingredients.map(ingredient => {
    return (
      <View key={ingredient.id} style={styles.listItem}>
        <TextInput
          placeholder="qty"
          style={styles.quantityInput}
          onChangeText={val => {
            onChange(ingredient.id, 'quantity', val);
          }}
        />
        <View style={styles.unitInput}>
          <MeasurementUnitPicker
            onSelectValue={val => {
              console.log('value', val);
              onChange(ingredient.id, 'unit', val);
            }}
          />
        </View>
        <Text style={styles.ingredientName}>{ingredient.name}</Text>
      </View>
    );
  });

  return <>{currentList}</>;
};

export default IngredientForm;

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
