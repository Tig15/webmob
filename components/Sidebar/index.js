import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CommonSearch from "../Search";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WebSidebar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Web-Mob</Text>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Home</li>
        <li style={styles.menuItem}>Dashboard</li>
        <li style={styles.menuItem}>About Us</li>
      </ul>

      <TouchableOpacity style={styles.logOut}>
        <Text style={styles.inside}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DAC0A3",
    paddingTop: 10,
    width: windowWidth * 0.1,
    height: windowHeight,
    gap: 40,
  },
  heading: {
    fontSize: 28,
    color: "black",
    textTransform: "uppercase",
    borderBottomWidth: 2,
    borderStyle: "dashed",
    paddingLeft: 20,
    paddingBottom: 5,
  },
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
