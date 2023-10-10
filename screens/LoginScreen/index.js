import React from "react";
import { View, StyleSheet } from "react-native";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  const handleLogin = (values) => {
    console.log("Form values:", values);
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
