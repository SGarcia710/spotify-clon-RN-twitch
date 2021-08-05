import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import LibraryScreen from '../screens/Library';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Búsqueda" component={SearchScreen} />
        <Tab.Screen name="Tu biblioteca" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
