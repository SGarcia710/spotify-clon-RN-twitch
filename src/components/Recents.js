import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const decideSize = (size, designReference, mobileReference) => {
  return (size * mobileReference) / designReference;
};

const DATA = [
  {
    name: 'Como Estrellas Radio',
    image:
      'https://cdn.dribbble.com/users/59947/screenshots/16144105/media/5a7d651f14cfb76751783dbd9a8de7b1.jpg?compress=1&resize=1200x900',
  },
  {
    name: 'Éxitos Colombia',
    image:
      'https://cdn.dribbble.com/users/3941202/screenshots/15669115/media/da970931bdf6e4552d69e5c589c8246d.jpg?compress=1&resize=1200x900',
  },
  {
    name: 'Todo Indie',
    image:
      'https://cdn.dribbble.com/users/3941202/screenshots/13913299/media/1739d29445afd8812a8d8041d14a7ab3.png?compress=1&resize=800x600',
  },
  {
    name: 'Música sin copyright',
    image:
      'https://cdn.dribbble.com/users/2089694/screenshots/16135247/media/50e6a4196d33387070fccfa3ab50e67b.png?compress=1&resize=1200x900',
  },
  {
    name: 'Descubrimiento semanal',
    image:
      'https://cdn.dribbble.com/users/413551/screenshots/15828518/media/43ad8280c9311add74e174c150c807cd.png?compress=1&resize=1200x900',
  },
  {
    name: 'SGarcia Radio',
    image:
      'https://cdn.dribbble.com/users/413551/screenshots/12484193/media/6d9eba2cae57dd9d38dac2257dafa239.png?compress=1&resize=1200x900',
  },
];

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
        DATA.map((ele) => <Recent image={ele.image} name={ele.name} />)
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
    borderRadius: 4,
    width: decideSize(167, 375, width),
    height: decideSize(56, 812, height),
    marginBottom: 8,

    alignItems: 'center',
    paddingRight: 8,
  },
  recentName: {
    color: 'white',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: -0.3,
  },
  recentImage: {
    height: '100%',
    width: decideSize(56, 375, width),
    marginRight: 8,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
});

export default Recents;
