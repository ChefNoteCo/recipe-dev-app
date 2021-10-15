import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import UserIngredientList from '../UserIngredientList/UserIngredientList';

const FindIngredient = ({ addIngredientFn, modalVisible, closeModal }) => {
  const ingredients = [
    {
      id: 'ing123',
      name: 'Chocolate Whey Protein',
    },
    {
      id: 'ing456',
      name: 'Chocolate Chips',
    },
  ];
  return (
    <View>
      <Modal
        style={styles.ingredientModal}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          closeModal(!modalVisible);
        }}
      >
        <View style={styles.ingredientModal}>
          <Text>Hello Modal!!!</Text>
          <UserIngredientList
            ingredients={ingredients}
            onIngredientPress={addIngredientFn}
          />
          <Button title="Close" onPress={() => closeModal(!modalVisible)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  ingredientModal: {
    margin: 20,
    padding: 50,
    backgroundColor: 'white',
  },
});

export default FindIngredient;
