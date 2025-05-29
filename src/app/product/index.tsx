import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Product = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Text style={styles.subtitle}>Product list will be displayed here</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
  },
});