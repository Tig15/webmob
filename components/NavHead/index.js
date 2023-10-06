import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import CommonSearch from "../Search";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavHead = () => {
  return (
    <View style={styles.navie}>
      <View style={styles.searchFor}>
        <CommonSearch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navie: {
    backgroundColor: "#F8F0E5",
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
  },
  searchFor: {
    position: "absolute",
    width: "30%",
    top: 0,
    left: 0,
  },
});

export default NavHead;
