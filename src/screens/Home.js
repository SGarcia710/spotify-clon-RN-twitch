import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import ContinueWith from '../components/ContinueWith';
import Header from '../components/Header';
import Recents from '../components/Recents';
import TrendingPodcasts from '../components/TrendingPodcasts';

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'black',
        paddingHorizontal: 16,
      }}
    >
      <Header />
      <Recents />
      <ContinueWith />
      <TrendingPodcasts />
    </ScrollView>
  );
};

export default HomeScreen;
