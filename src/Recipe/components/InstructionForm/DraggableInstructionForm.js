import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

const InstructionItem = ({ item, drag, isActive, onDelete }) => {
  return (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        style={styles.ingredientItem}
      >
        <Text style={styles.ingredientLabel}>{item.label}</Text>
        <Button
          icon={<Icon name="close" size={20} />}
          onPress={() => onDelete(item.id)}
          style={styles.deleteButton}
          type="clear"
        />
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

const InstructionForm = ({
  instructions,
  onAdd,
  onBlur,
  onDragEnd,
  onDelete,
  onFocus,
}) => {
  /* 
    This is an interim state solely to store the data from the input field.
    It didn't make a lot of sense to try and store it in the parent component
    when there will only ever be one open input field for an instruction.
  */
  const [newInstruction, setNewInstruction] = useState('');

  const saveInstruction = () => {
    onAdd(newInstruction);
    setNewInstruction('');
  };

  return (
    <View>
      <DraggableFlatList
        data={instructions}
        keyExtractor={item => `instr_${item.id}`}
        onDragEnd={onDragEnd}
        renderItem={props => {
          return <InstructionItem {...props} onDelete={onDelete} />;
        }}
      />
      <View style={styles.ingredientField}>
        <Input
          multiline
          placeholder="new instruction"
          style={styles.ingredientLabel}
          onChangeText={val => setNewInstruction(val)}
          value={newInstruction}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Button
          icon={<Icon name="send" size={20} />}
          onPress={saveInstruction}
          type="clear"
          style={styles.actionButton}
        />
      </View>
    </View>
  );
};

export default InstructionForm;

const styles = StyleSheet.create({
  ingredientItem: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
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
