import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Orders = () => {
  const orders = [
    { id: 1, status: 'Delivered', total: '$89.99', date: '2024-01-15' },
    { id: 2, status: 'Processing', total: '$129.50', date: '2024-01-20' },
    { id: 3, status: 'Shipped', total: '$45.00', date: '2024-01-22' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return '#34C759';
      case 'Processing': return '#FF9500';
      case 'Shipped': return '#007AFF';
      default: return '#8E8E93';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return 'check-circle';
      case 'Processing': return 'clock-o';
      case 'Shipped': return 'truck';
      default: return 'question-circle';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ordersList}>
        {orders.map((order) => (
          <TouchableOpacity key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>Order #{order.id}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
            </View>
            
            <View style={styles.orderBody}>
              <View style={styles.statusContainer}>
                <FontAwesome 
                  name={getStatusIcon(order.status)} 
                  size={16} 
                  color={getStatusColor(order.status)} 
                />
                <Text style={[styles.status, { color: getStatusColor(order.status) }]}>
                  {order.status}
                </Text>
              </View>
              <Text style={styles.total}>{order.total}</Text>
            </View>

            <View style={styles.orderFooter}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  ordersList: {
    padding: 20,
  },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
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
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  orderDate: {
    fontSize: 14,
    color: '#8E8E93',
  },
  orderBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  orderFooter: {
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
    paddingTop: 12,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});