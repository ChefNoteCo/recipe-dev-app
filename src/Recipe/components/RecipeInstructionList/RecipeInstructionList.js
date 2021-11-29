import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export const RecipeInstructionList = ({ instructions }) => {
  const instructionText = instructions.map(instruction => (
    <Text>{instruction.description}</Text>
  ));
  return (
    <View>
      <Text h4>Instructions</Text>
      {instructionText}
    </View>
  );
};
