import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SONGS } from '../constants';
import { decideSize } from '../utils';

const Recent = (props) => {
  return (
    <TouchableOpacity
      style={styles.recentContainer}
      onPress={() => {
        console.log(`Seleccionaste ${props.name}`);
      }}
    >
      <Image style={styles.recentImage} source={{ uri: props.image }} />
      <Text numberOfLines={2} style={styles.recentName}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const Recents = () => {
  return (
    <View style={styles.container}>
      {React.Children.toArray(
        SONGS.map((ele) => <Recent image={ele.image} name={ele.name} />)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recentContainer: {
    flexDirection: 'row',
    backgroundColor: '#282828',
    borderRadius: decideSize(4),
    width: decideSize(167),
    height: decideSize(56),
    marginBottom: decideSize(8),

    alignItems: 'center',
    paddingRight: decideSize(8),
  },
  recentName: {
    color: 'white',
    flex: 1,
    fontWeight: 'bold',
    fontSize: decideSize(10),
    letterSpacing: decideSize(-0.3),
  },
  recentImage: {
    height: '100%',
    width: decideSize(56),
    marginRight: decideSize(8),
    borderBottomLeftRadius: decideSize(4),
    borderTopLeftRadius: decideSize(4),
  },
});

export default Recents;
