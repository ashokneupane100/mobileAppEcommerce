import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

function TabBarIcon({ name, color }: TabBarIconProps) {
  return <FontAwesome size={24} color={color} name={name} />;
}

export default function ShopLayout() {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs 
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarLabelStyle: { 
            fontSize: 12,
            fontWeight: '500'
          },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
            height: 90,
            backgroundColor: 'white',
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          headerShown: true,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 20,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            headerTitle: "Shop",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="shopping-cart" color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="orders" 
          options={{
            title: "Orders",
            headerTitle: "My Orders",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="list-alt" color={color} />
            ),
          }} 
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});