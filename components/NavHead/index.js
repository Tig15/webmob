import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import CommonSearch from "../Search";
import tailwind from "twrnc";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavHead = () => {
  return (
    <View style={styles.navie}>
      <Text
        style={tailwind`text-3xl text-slate-900 uppercase border-b-2 w-40 border-dashed pl-2 pb-2 ml-2 mt-4`}
      >
        Web-Mob
      </Text>
      <View style={styles.searchFor}>
        <CommonSearch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navie: {
    backgroundColor: "#F8F0E5",
    width: windowWidth,
    height: windowHeight * 0.1,
  },
  searchFor: {
    position: "absolute",
    width: "30%",
    top: 0,
    right: 0,
  },
});

export default NavHead;
