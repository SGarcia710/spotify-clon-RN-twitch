import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TAB_ICONS, TAB_ROUTES } from '../constants';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return TAB_ICONS[route.name](color);
            },
            tabBarStyle: {
              backgroundColor: '#282828',
              borderTopWidth: 0,
              paddingBottom: 2,
            },
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#B3B3B3',
          };
        }}
      >
        {React.Children.toArray(
          Object.values(TAB_ROUTES).map((route) => {
            return <Tab.Screen {...route} />;
          })
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
