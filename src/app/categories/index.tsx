import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const CategoriesIndex = () => {
  const categories = [
    { id: 1, name: 'Electronics', icon: 'laptop', slug: 'electronics' },
    { id: 2, name: 'Clothing', icon: 'shopping-bag', slug: 'clothing' },
    { id: 3, name: 'Home & Garden', icon: 'home', slug: 'home-garden' },
    { id: 4, name: 'Sports', icon: 'futbol-o', slug: 'sports' },
    { id: 5, name: 'Books', icon: 'book', slug: 'books' },
    { id: 6, name: 'Beauty', icon: 'heart', slug: 'beauty' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.categoriesGrid}>
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`} asChild>
            <TouchableOpacity style={styles.categoryCard}>
              <FontAwesome name={category.icon as any} size={32} color="#007AFF" />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: 'white',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    marginTop: 12,
    textAlign: 'center',
  },
});