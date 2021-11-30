import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IngredientHome from './containers/IngredientHome';

const Stack = createNativeStackNavigator();

export default function Ingredient() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IngredientList"
        component={IngredientHome}
        options={{ title: 'My Ingredients' }}
      />
    </Stack.Navigator>
  );
}
