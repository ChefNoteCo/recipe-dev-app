import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import UserIngredientList from '../UserIngredientList/UserIngredientList';
import IngredientList from '../../../app/components/IngredientList/IngredientList';

const FindIngredient = ({
  allIngredients,
  addIngredientFn,
  modalVisible,
  closeModal,
  selectedIngredients,
}) => {
  return (
    <View>
      <Overlay
        style={styles.ingredientModal}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          closeModal(!modalVisible);
        }}
        fullScreen
      >
        <View style={styles.ingredientModal}>
          <IngredientList
            ingredients={allIngredients}
            onPressFn={addIngredientFn}
            selectedIngredients={selectedIngredients}
          />
          <View style={styles.closeButton}>
            <Button
              title="Close"
              onPress={() => closeModal(!modalVisible)}
              type="clear"
            />
          </View>
        </View>
      </Overlay>
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
    marginTop: 35,
    padding: 15,
  },
  closeButton: {
    marginTop: 25,
  },
});

export default FindIngredient;
