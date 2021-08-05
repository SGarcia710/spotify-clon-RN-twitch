import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SONGS } from '../constants';
import { decideSize } from '../utils';

const ContinueWithItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.continueWithItemContainer}
      onPress={() => {
        console.log(`Seleccionaste ${props.name}`);
      }}
    >
      <Image
        style={styles.continueWithItemImage}
        source={{ uri: props.image }}
      />
      <Text numberOfLines={2} style={styles.continueWithItemName}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const ContinueWith = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vuelve a...</Text>
      <ScrollView horizontal>
        {React.Children.toArray(
          SONGS.map((ele) => (
            <ContinueWithItem image={ele.image} name={ele.name} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginTop: decideSize(36),
  },
  text: {
    fontWeight: 'bold',
    fontSize: decideSize(20),
    lineHeight: decideSize(27),
    letterSpacing: decideSize(-0.3),
    color: 'white',
    marginBottom: decideSize(16),
  },
  continueWithItemContainer: {
    marginRight: decideSize(16),
  },
  continueWithItemImage: {
    width: decideSize(112),
    height: decideSize(112),
  },
  continueWithItemName: {
    color: 'white',
    width: '100%',
    fontSize: decideSize(10),
    marginTop: decideSize(8),
  },
});

export default ContinueWith;
