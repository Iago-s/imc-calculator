import React from 'react';

import { View, Text, StyleSheet, ImagePropTypes } from 'react-native';


const Result = ({ imc = 0, situation = '', color = '#f5f5f5'}) => {
  return(
    <View style={styles.container}>
      <View style={styles.imcContainer}>
        <Text style={{ fontSize: 70, color: color }}>{imc}</Text>
        <Text style={styles.imc}>IMC </Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#455a64' }}>{situation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    flex: 1,

    backgroundColor: '#f5f5f5',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  imcContainer: {
    flexDirection: 'row',
  },

  imc: {
    fontSize: 20,
    color: '#455a64',
    fontWeight: 'bold',
  },

});

export default Result;