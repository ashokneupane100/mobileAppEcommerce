import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const ShopIndex = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to RN Shop</Text>
        <Text style={styles.subtitle}>Discover amazing products</Text>
      </View>

      <View style={styles.actionSection}>
        <Link href="/categories" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="th-large" size={24} color="#007AFF" />
            <Text style={styles.actionButtonText}>Browse Categories</Text>
            <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
          </TouchableOpacity>
        </Link>

        <Link href="/product" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="cube" size={24} color="#007AFF" />
            <Text style={styles.actionButtonText}>View Products</Text>
            <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
          </TouchableOpacity>
        </Link>

        <Link href="/cart" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="shopping-cart" size={24} color="#007AFF" />
            <Text style={styles.actionButtonText}>Shopping Cart</Text>
            <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.quickStats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>150+</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>25+</Text>
          <Text style={styles.statLabel}>Categories</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>4.8★</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShopIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '400',
  },
  actionSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  actionButtonText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginLeft: 12,
  },
  quickStats: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '500',
  },
});