import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import image from '../../assets/images/TrendingPodcasts.png';
import { SONGS } from '../constants';
import { decideSize } from '../utils';

const _Item = (props) => {
  return (
    <TouchableOpacity
      style={itemStyles.container}
      onPress={() => {
        console.log(`Seleccionaste ${props.name}`);
      }}
    >
      <Image style={itemStyles.image} source={{ uri: props.image }} />
      <Text numberOfLines={1} style={itemStyles.name}>
        {props.name}
      </Text>
      <Text numberOfLines={1} style={itemStyles.subtitle}>
        {props.subtitle}
      </Text>
    </TouchableOpacity>
  );
};

const TrendingPodcasts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={image} />
        <View style={styles.headerInfo}>
          <Text style={styles.subtitle}>POPULARES ENTRE LOS OYENTES DE</Text>
          <Text style={styles.title}>Lo de Producto</Text>
        </View>
      </View>
      <ScrollView horizontal>
        {React.Children.toArray(
          SONGS.map((ele) => (
            <_Item image={ele.image} name={ele.name} subtitle={ele.subtitle} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: decideSize(42.5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: decideSize(18.5),
  },
  headerInfo: {
    marginLeft: decideSize(8),
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: decideSize(10),
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: decideSize(20),
  },
});

const itemStyles = StyleSheet.create({
  container: {
    marginRight: decideSize(16),
  },
  image: {
    width: decideSize(152),
    height: decideSize(152),
    borderTopLeftRadius: decideSize(8),
    borderTopRightRadius: decideSize(8),
    marginBottom: decideSize(4),
  },
  name: {
    color: 'white',
    width: '100%',
    fontSize: decideSize(10),
    marginBottom: decideSize(4),
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#B3B3B3',
    width: '100%',
    fontSize: decideSize(10),
    marginBottom: decideSize(4),
  },
});

export default TrendingPodcasts;
