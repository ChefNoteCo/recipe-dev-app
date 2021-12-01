import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IngredientHome from './containers/IngredientHome';
import NewIngredient from './containers/NewIngredient/NewIngredient';
import NewIngredientButton from './components/NewIngredientButton/NewRecipeButton';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Ingredient() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IngredientList"
        component={IngredientHome}
        options={({ navigation }) => ({
          title: 'My Ingredients',
          headerRight: () => (
            <NewIngredientButton
              onPress={() => navigation.navigate('NewIngredient')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="NewIngredient"
        component={NewIngredient}
        options={{ title: 'New Ingredient' }}
      />
    </Stack.Navigator>
  );
}
