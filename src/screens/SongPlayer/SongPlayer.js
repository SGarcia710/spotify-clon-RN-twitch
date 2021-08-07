import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { decideSize } from '../../utils';
import Header from './components/Header';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import ProgressLine from './components/ProgressLine';
import Controls from './components/Controls';

const SongPlayerScreen = ({ route, navigation }) => {
  const [liked, setLiked] = React.useState(false);
  const [paused, setPaused] = React.useState(true);
  const { params } = route;
  const { song } = params;
  console.log(song);
  return (
    <View style={styles.container}>
      <Header name={song.name} />
      <Image style={styles.songCover} source={{ uri: song.image }} />
      <View style={styles.songInfoContainer}>
        <View>
          <Text style={styles.songName}>{song.name}</Text>
          <Text style={styles.songAuthor}>{song.author}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setLiked(!liked);
          }}
        >
          <AntDesign
            name={liked ? 'heart' : 'hearto'}
            color={liked ? 'red' : 'white'}
            size={decideSize(22)}
          />
        </TouchableOpacity>
      </View>

      <ProgressLine progress={100} actualTime="0:30" leftTime="-2:50" />
      <Controls paused={paused} setPaused={() => setPaused(!paused)} />

      <View style={styles.bottomControls}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="monitor-speaker"
            size={decideSize(24)}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="playlist-play"
            size={decideSize(24)}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    height: Dimensions.get('screen').height,
    paddingHorizontal: 16,
    marginBottom: decideSize(40),
  },
  songCover: {
    width: decideSize(343),
    height: decideSize(343),
    marginBottom: decideSize(40),
  },
  songInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songName: {
    color: 'white',
    marginBottom: decideSize(8),
    fontWeight: 'bold',
    letterSpacing: decideSize(-0.3),
    fontSize: decideSize(20),
  },
  songAuthor: {
    color: '#B3B3B3',
    fontWeight: '600',
    letterSpacing: decideSize(-0.3),
    fontSize: decideSize(12),
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SongPlayerScreen;
