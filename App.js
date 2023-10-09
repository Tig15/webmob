import React from "react";
import { StyleSheet, View } from "react-native";
import ComponentManager from "./components/componentManager";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./Redux/store";
import tailwind from "twrnc";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar hidden />
        <View style={{ overflow: "hidden" }}>
          {ComponentManager.getComponent("NavHead")}
          {ComponentManager.getComponent("WebSidebar")}
          <View style={{ position: "absolute", top: 120, left: 180 }}>
            {ComponentManager.getComponent("ProductCard")}
          </View>
        </View>
        <View style={styles.container}>
          {ComponentManager.getComponent("AppNavigate")}
        </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default App;
