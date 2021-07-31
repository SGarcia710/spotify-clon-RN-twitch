import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
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
          DATA.map((ele) => (
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
    marginTop: 36,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: -0.3,
    color: 'white',
    marginBottom: 16,
  },
  continueWithItemContainer: {
    marginRight: 16,
  },
  continueWithItemImage: {
    width: decideSize(112, 375, width),
    height: decideSize(112, 375, width),
  },
  continueWithItemName: {
    color: 'white',
    width: '100%',
    fontSize: 10,
    marginTop: 8,
  },
});

export default ContinueWith;
