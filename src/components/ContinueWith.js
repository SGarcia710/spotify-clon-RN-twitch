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
import { useNavigation } from '@react-navigation/native';

const ContinueWithItem = (props) => {
  const { song } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.continueWithItemContainer}
      onPress={() => {
        console.log(`Seleccionaste ${song.name}`);
        navigation.navigate('SongPlayer', {
          song,
        });
      }}
    >
      <Image
        style={styles.continueWithItemImage}
        source={{ uri: song.image }}
      />
      <Text numberOfLines={2} style={styles.continueWithItemName}>
        {song.name}
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
          SONGS.map((ele) => <ContinueWithItem song={ele} />)
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
