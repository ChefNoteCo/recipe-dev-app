import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from './src/app/state/store';
import Recipe from './src/Recipe/Recipe';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const hello = 'world';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Recipes"
                component={Recipe}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="pizza-outline" color={color} size={size} />
                  ),
                }}
              />
              {/* <Tab.Screen name="NewRecipe" component={RecipeForm} /> */}
              {/* <Tab.Screen name="RecipeDetail" component={RecipeDetail} /> */}
            </Tab.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
