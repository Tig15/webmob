import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CommonSearch = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    width: "95%",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "white",
  },
});

export default CommonSearch;
