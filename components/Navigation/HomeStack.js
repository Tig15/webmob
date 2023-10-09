import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import SettingsScreen from "../../screens/Settings";
import ProductCard from "../../components/ProductCard";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Card" component={ProductCard} />
    </Stack.Navigator>
  );
};

export default HomeStack;

// <Tab.Navigator
//   screenOptions={{
//     activeTintColor: "blue",
//     inactiveTintColor: "gray",
//     style: {
//       backgroundColor: "white",
//     },
//     headerShown: false,
//     tabBarShowLabel: false,
//   }}
// >
//   <Tab.Screen
//     name="Home"
//     component={HomeScreen}
//     options={{
//       tabBarIcon: ({ color, size }) => (
//         <Ionicons name="home" color={color} size={size} />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="Settings"
//     component={SettingsScreen}
//     options={{
//       tabBarIcon: ({ color, size }) => (
//         <Ionicons name="settings" color={color} size={size} />
//       ),
//     }}
//   />
// </Tab.Navigator>
