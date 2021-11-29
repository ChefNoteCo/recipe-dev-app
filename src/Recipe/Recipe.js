import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeHome from './containers/RecipeHome/RecipeHome';
import RecipeForm from './containers/RecipeForm/RecipeForm';
import RecipeDetail from './containers/RecipeDetail/RecipeDetail';
import NewRecipeButton from './components/NewRecipeButton/NewRecipeButton';

const Stack = createNativeStackNavigator();

export default function Recipe() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecipeList"
        component={RecipeHome}
        options={({ navigation }) => ({
          headerRight: () => (
            <NewRecipeButton onPress={() => navigation.navigate('NewRecipe')} />
          ),
        })}
      />
      <Stack.Screen name="NewRecipe" component={RecipeForm} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
    </Stack.Navigator>
  );
}
