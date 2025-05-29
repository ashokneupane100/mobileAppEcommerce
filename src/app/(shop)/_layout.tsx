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
  return <FontAwesome size={30} color={color} name={name} />;
}

const TabsLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
        },
        headerShown: false,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "shop",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="shopping-cart" color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="orders" 
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="book" color={color} />
            ),
          }} 
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});