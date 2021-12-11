import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import MeasurementUnitPicker from '../../../app/components/MeasurementUnitPicker/MeasurementUnitPicker';
import FindIngredient from '../FindIngredient/FindIngredientNew';

const IngredientField = ({
  allIngredients,
  ingredient,
  onChange,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [draftIngredient, setDraftIngredient] = useState(ingredient);

  const setIngredient = valueObject => {
    const updated = Object.assign({}, draftIngredient, valueObject);
    setDraftIngredient(updated);
    onChange(updated);
  };

  const ingredientName =
    draftIngredient.name === '' ? (
      <Button
        type="clear"
        title="Choose ingredient..."
        onPress={() => setShowModal(true)}
      />
    ) : (
      <Text style={styles.ingredientName}>{draftIngredient.name}</Text>
    );

  return (
    <View key={draftIngredient.id} style={styles.listItem}>
      <TextInput
        onChangeText={val => setIngredient({ quantity: val })}
        placeholder="qty"
        value={draftIngredient.quantity}
        style={styles.quantityInput}
      />
      <MeasurementUnitPicker
        onSelectValue={val => {
          /* set draft ingredient unit */
          setIngredient({ unit: val });
        }}
        style={styles.unitInput}
        value={ingredient.unit}
      />
      {ingredientName}
      <Button
        icon={<Icon name="close" size={20} />}
        onPress={onDelete}
        style={styles.actionButton}
        type="clear"
      />
      {ingredient.name === '' && (
        <FindIngredient
          allIngredients={allIngredients}
          modalVisible={showModal}
          closeModal={() => setShowModal(false)}
          modalVisible={showModal}
          selectedIngredients={[ingredient]}
          onSelect={val => {
            /* set draft ingredient id and name */
            setIngredient(val);
          }}
        />
      )}
    </View>
  );
};

const RecipeIngredientForm = ({
  allIngredients,
  selectedIngredients,
  ingredientsLoading,
  onAddItem,
  onBlur,
  onChange,
  onDeleteItem,
}) => {
  const currentList = selectedIngredients.map((ingredient, index) => (
    <IngredientField
      allIngredients={allIngredients}
      key={ingredient.id}
      ingredient={ingredient}
      onBlur={onBlur}
      onChange={val => {
        onChange(`ingredients.${index}`, val);
      }}
      onDelete={() => onDeleteItem(index)}
    />
  ));

  return (
    <View>
      {currentList}
      <Button
        title="Add Ingredient"
        onPress={onAddItem}
        type="clear"
        disabled={ingredientsLoading}
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
