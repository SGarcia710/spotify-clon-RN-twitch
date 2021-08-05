import React from 'react';
import { View, Text } from 'react-native';

const SearchScreen = () => {
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
        SearchScreen
      </Text>
    </View>
  );
};

export default SearchScreen;
