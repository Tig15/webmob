import React from "react";
import { View } from "react-native";
import ComponentManager from "./components/componentManager";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <View>{ComponentManager.getComponent("WebSidebar")}</View>
      {ComponentManager.getComponent("NavHead")}
      <View style={{ flex: 1 }}>
        {ComponentManager.getComponent("BottomTabBar")}
      </View>
    </>
  );
};

export default App;
