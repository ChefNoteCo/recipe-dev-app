import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

export const RecipeInstructionList = ({ instructions }) => {
  const instructionText = instructions.map((instruction, index) => (
    <Text key={`${instruction.order}_${index}`} style={styles.item}>
      {instruction.label}
    </Text>
  ));
  return (
    <View>
      <Text h4>Instructions</Text>
      {instructionText}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 5,
  },
});
