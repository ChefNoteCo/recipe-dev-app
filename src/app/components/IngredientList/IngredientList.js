import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const IngredientList = ({ ingredients, onPressFn, selectedIngredients }) => {
  return (
    <View>
      {ingredients.map((item, index) => {
        const isSelected =
          selectedIngredients.findIndex(n => {
            return n.id === item.id;
          }) >= 0;
        const selectedIcon = isSelected ? (
          <Icon name="checkmark" size={20} style={styles.selectedIcon} />
        ) : null;
        return (
          <ListItem key={index} bottomDivider onPress={() => onPressFn(item)}>
            <ListItem.Content style={styles.listContent}>
              {selectedIcon}
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

export default IngredientList;

const styles = StyleSheet.create({
  listContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  selectedIcon: {
    marginRight: 5,
  },
});
