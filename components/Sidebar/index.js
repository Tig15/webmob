import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import CommonSearch from "../Search";
import tailwind from "twrnc";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WebSidebar = () => {
  return (
    <View style={tailwind`bg-orange-300 h-[90%] w-45 pt-4 gap-5`}>
      <View style={styles.menu}>
        <Pressable>
          <Text style={styles.menuItem}>Home</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.menuItem}>Settings</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.logOut}>
        <Text style={styles.inside}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "column",
    height: 40,
    gap: 30,
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: 8,
    marginLeft: 10,
  },
  menuItem: {
    fontSize: 18,
    color: "black ",
    marginBottom: 10,
    cursor: "pointer",
    paddingLeft: 10,
  },
  logOut: {
    position: "absolute",
    bottom: 15,
    right: 30,
    width: 60,
    height: 30,
    borderRadius: 5,
    paddingLeft: 6,
    paddingTop: 6,
    backgroundColor: "#0F2C59",
  },
  inside: {
    color: "white",
  },
});

export default WebSidebar;
