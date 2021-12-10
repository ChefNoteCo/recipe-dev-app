import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

const InstructionItem = ({ item, onBlur, onChange, onDelete, style }) => {
  return (
    <View style={styles.ingredientField}>
      <Input
        placeholder="new instruction"
        style={styles.ingredientLabel}
        onChangeText={onChange}
        onBlur={onBlur}
        value={item.label}
        onBlur={onBlur}
      />
      <Button
        icon={<Icon name="close" size={20} />}
        onPress={onDelete}
        style={styles.actionButton}
        type="clear"
      />
    </View>
  );
};

const InstructionForm = ({
  instructions,
  onAddItem,
  onBlur,
  onChange,
  onDeleteItem,
}) => {
  return (
    <View>
      {instructions.length > 0 ? (
        <>
          {instructions.map((instruction, index) => (
            <View style={styles.ingredientItem}>
              <InstructionItem
                item={instruction}
                onChange={onChange(`instructions.${index}.label`)}
                onBlur={onBlur(`instructions.${index}.label`)}
                onDelete={() => {
                  onDeleteItem(index);
                }}
                style={styles.ingredientItem}
              />
            </View>
          ))}
          <Button
            onPress={onAddItem}
            type="clear"
            style={styles.actionButton}
            title="Add New Instruction"
          />
        </>
      ) : (
        <Button
          onPress={onAddItem}
          type="clear"
          style={styles.actionButton}
          title="Add New Instruction"
        />
      )}
    </View>
  );
};

export default InstructionForm;

const styles = StyleSheet.create({
  ingredientItem: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 15,
  },
  ingredientField: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
  },
  ingredientLabel: {
    flex: 3,
  },
  actionButton: {
    flex: 1,
    marginRight: 5,
  },
});
