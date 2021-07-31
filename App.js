import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ContinueWith from './src/components/ContinueWith';
import Header from './src/components/Header';
import Recents from './src/components/Recents';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Recents />
      <ContinueWith />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 62,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
});
