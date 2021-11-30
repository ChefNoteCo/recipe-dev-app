import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';

const NoIngredientNotice = () => {
  return (
    <View>
      <Card>
        <Card.Title>No Ingredients</Card.Title>
        <Card.Divider />
        <Text>You have not yet saved any ingredients</Text>
      </Card>
    </View>
  );
};

export default NoIngredientNotice;
