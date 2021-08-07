import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { decideSize } from '../../../utils';

const Header = ({ name }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-down" color="white" size={decideSize(22)} />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Entypo
          name="dots-three-horizontal"
          color="white"
          size={decideSize(22)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: decideSize(16),
    alignItems: 'center',
    marginBottom: decideSize(40),
  },
  text: {
    color: 'white',
    letterSpacing: decideSize(-0.3),
    fontSize: decideSize(12),
    fontWeight: '600',
  },
});

export default Header;
