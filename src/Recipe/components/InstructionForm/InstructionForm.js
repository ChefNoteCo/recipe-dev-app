import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';

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
            <View key={instruction.id} style={styles.instructionItem}>
              <InstructionItem
                item={instruction}
                onChange={onChange(`instructions.${index}.label`)}
                onBlur={onBlur(`instructions.${index}.label`)}
                onDelete={() => {
                  onDeleteItem(index);
                }}
                style={styles.instructionItem}
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
  instructionItem: {
    paddingTop: 8,
    fontSize: 15,
  },
  ingredientField: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 8,
  },
  ingredientLabel: {
    padding: 5,
    fontSize: 15,
    flex: 3,
    margin: 0,
    paddingTop: 0,
  },
  actionButton: {
    flex: 1,
    marginRight: 5,
  },
});
