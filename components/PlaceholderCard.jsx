import React from 'react';
import {StyleSheet, View} from 'react-native';

const PlaceholderCard = () => {
  return (
      <View style={styles.card}>
        <View style={styles.imagePlaceholder}/>
        <View style={styles.textPlaceholder}/>
        <View style={styles.textPlaceholder}/>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 1,
  },
  imagePlaceholder: {
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  textPlaceholder: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default PlaceholderCard;
