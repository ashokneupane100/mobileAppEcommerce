import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(shop)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="categories" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="product" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="cart" 
        options={{ 
          presentation: "modal", 
          title: "Shopping Cart",
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="auth" 
        options={{ 
          headerShown: true,
          title: "Authentication"
        }} 
      />
      <Stack.Screen 
        name="orders" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}