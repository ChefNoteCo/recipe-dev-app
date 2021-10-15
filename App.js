import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/app/state/store';
import RecipeHome from './src/Recipe/containers/RecipeHome/RecipeHome';
import RecipeForm from './src/Recipe/containers/RecipeForm/RecipeForm';
import NewRecipeButton from './src/Recipe/components/NewRecipeButton/NewRecipeButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={RecipeHome}
            options={({ navigation }) => ({
              headerRight: () => (
                <NewRecipeButton
                  onPress={() => navigation.navigate('NewRecipe')}
                />
              ),
            })}
          />
          <Stack.Screen name="NewRecipe" component={RecipeForm} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
