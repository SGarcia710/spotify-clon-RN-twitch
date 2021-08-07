import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 62,
    backgroundColor: 'black',
  },
});
