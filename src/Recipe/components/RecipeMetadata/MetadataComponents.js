import React from 'react';
import { StyleSheet } from 'react-native';
import { Tab, TabView, Text } from 'react-native-elements';

export const RecipeName = ({ name }) => {
  return (
    <Text h2 style={{ fontSize: 18 }}>
      {name}
    </Text>
  );
};
