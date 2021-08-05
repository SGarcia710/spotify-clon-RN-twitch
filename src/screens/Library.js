import React from 'react';
import { View, Text } from 'react-native';

const LibraryScreen = () => {
  return (
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
};

export default LibraryScreen;
