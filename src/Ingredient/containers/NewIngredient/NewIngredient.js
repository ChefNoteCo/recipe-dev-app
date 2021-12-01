import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import MeasurementUnitPicker from '../../../app/components/MeasurementUnitPicker/MeasurementUnitPicker';
import { Ingredient } from '../../models';
import { saveIngredient } from '../../state/ingredients';

const NewIngredient = ({ navigation }) => {
  const dispatch = useDispatch();

  let defaultState = Ingredient({});
  const [draftIngredient, setUpdatedIngredient] = useState(defaultState);

  const updateIngredientMetadata = (field, value) => {
    const updatedIngredient = Object.assign({}, draftIngredient);
    updatedIngredient[field] = value;
    setUpdatedIngredient(updatedIngredient);
  };

  const saveNewIngredient = () => {
    dispatch(saveIngredient(draftIngredient)).then(() => {
      navigation.navigate('IngredientList');
    });
  };

  return (
    <View style={styles.inputForm}>
      <Input
        onChangeText={val => updateIngredientMetadata('name', val)}
        placeholder="Name"
        value={draftIngredient.name}
      />
      <Input
        onChangeText={val => updateIngredientMetadata('baseQuantity', val)}
        placeholder="Serving Quantity"
        keyboardType="number-pad"
        value={draftIngredient.baseQuantity}
      />
      <View style={styles.unitInput}>
        <MeasurementUnitPicker
          onSelectValue={val => updateIngredientMetadata('baseUnit', val)}
        />
      </View>
      <View style={styles.formButtons}>
        <Button
          onPress={() => navigation.navigate('IngredientList')}
          style={styles.button}
          title="Cancel"
        />
        <Button
          title="Save"
          onPress={saveNewIngredient}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default NewIngredient;

const styles = StyleSheet.create({
  button: {
    width: 150,
  },
  inputForm: {
    padding: 10,
  },
  formButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 25,
  },
  unitInput: {
    fontSize: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
