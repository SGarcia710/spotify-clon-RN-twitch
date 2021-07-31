import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <TouchableOpacity
          onPress={() => {
            console.log('Hola twitch!');
          }}
        >
          <Feather name="settings" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>¡Buenas noches!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 25,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: -0.3,
    color: 'white',
  },
});

export default Header;
