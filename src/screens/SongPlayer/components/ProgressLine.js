import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { decideSize } from '../../../utils';

const { width } = Dimensions.get('screen');

const ProgressLine = ({ progress, actualTime, leftTime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View
          style={{
            ...styles.progressLine,
            width: (progress * (width - 32)) / 100,
          }}
        />
        <View style={styles.fullLine} />
        <FontAwesome
          style={{
            position: 'absolute',
            left:
              progress <= decideSize(15) / 2
                ? 0
                : (progress * (width - 32)) / 100 - decideSize(15) / 2,
          }}
          name="circle"
          size={decideSize(15)}
          color="white"
        />
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>{actualTime}</Text>
        <Text style={styles.dataText}>{leftTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: decideSize(16) },
  line: {
    position: 'relative',
    justifyContent: 'center',
    height: decideSize(15) / 2,
  },
  progressLine: {
    height: decideSize(5),
    borderRadius: decideSize(8),
    position: 'absolute',
    backgroundColor: 'white',
  },
  fullLine: {
    width: '100%',
    height: decideSize(5),
    borderRadius: decideSize(8),
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  dataContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: decideSize(8),
  },
  dataText: {
    color: '#B3B3B3',
    fontSize: decideSize(10),
    fontWeight: 'bold',
    letterSpacing: decideSize(-0.3),
  },
});

export default ProgressLine;
