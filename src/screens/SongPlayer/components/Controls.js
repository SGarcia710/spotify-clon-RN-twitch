import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  SimpleLineIcons,
  Fontisto,
  AntDesign,
  Feather,
} from '@expo/vector-icons';
import { decideSize } from '../../../utils';

const Controls = ({ paused, setPaused }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <SimpleLineIcons name="shuffle" size={decideSize(24)} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Fontisto name="step-backwrad" size={decideSize(36)} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={setPaused}>
        <AntDesign
          name={paused ? 'play' : 'pausecircle'}
          size={decideSize(64)}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Fontisto name="step-forward" size={decideSize(36)} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="repeat" size={decideSize(24)} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: decideSize(16),
    marginBottom: decideSize(24),
  },
});

export default Controls;
