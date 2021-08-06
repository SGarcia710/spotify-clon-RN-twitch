import React from 'react';
import { View, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { decideSize } from '../utils';

const Tab = createMaterialTopTabNavigator();

const DummyScreen = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    }}
  >
    <Text
      style={{
        fontSize: 28,
        color: 'white',
      }}
    >
      LibraryScreen
    </Text>
  </View>
);
function MyTabs1() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: undefined,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#B3B3B3',
        tabBarLabelStyle: {
          fontSize: decideSize(28),
          textTransform: 'capitalize',
          letterSpacing: decideSize(-0.3),
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          width: decideSize(143),
          alignItems: 'flex-start',
        },
        tabBarIndicatorStyle: {
          height: 0,
        },
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Música" component={MyTabs} />
      <Tab.Screen name="Podcasts" component={MyTabs} />
    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#B3B3B3',
        tabBarLabelStyle: {
          fontSize: decideSize(12),
          textTransform: 'capitalize',
          letterSpacing: decideSize(-0.3),
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          width: decideSize(90),
        },

        tabBarIndicatorStyle: {
          backgroundColor: '#57B65F',
          height: 2,
        },
      }}
    >
      <Tab.Screen name="Playlists" component={DummyScreen} />
      <Tab.Screen name="Artistas" component={DummyScreen} />
      <Tab.Screen name="Albumnes" component={DummyScreen} />
    </Tab.Navigator>
  );
}

const LibraryScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}
    >
      <MyTabs1 />
    </View>
  );
};

export default LibraryScreen;
