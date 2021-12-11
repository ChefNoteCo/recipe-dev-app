import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeHome from './containers/RecipeHome/RecipeHome';
import CreateRecipe from './containers/CreateRecipe/CreateRecipe';
import EditRecipe from './containers/EditRecipe/EditRecipe';
import RecipeDetail from './containers/RecipeDetail/RecipeDetail';
import NewRecipeButton from './components/NewRecipeButton/NewRecipeButton';
import EditRecipeButton from './components/EditRecipeButton/EditRecipeButton';

const Stack = createNativeStackNavigator();

export default function Recipe() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecipeList"
        component={RecipeHome}
        options={({ navigation }) => ({
          headerRight: () => (
            <NewRecipeButton
              onPress={() => navigation.navigate('CreateRecipe')}
            />
          ),
        })}
      />
      <Stack.Screen name="CreateRecipe" component={CreateRecipe} />
      <Stack.Screen name="EditRecipe" component={EditRecipe} />
      <Stack.Screen name="ViewRecipe" component={RecipeDetail} />
    </Stack.Navigator>
  );
}
