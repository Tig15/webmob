import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CommonSearch from "../Search";
import CommonModal from "../Modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const wholeHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.header}>
      <View style={styles.secondHead}>
        <TouchableOpacity onPress={toggleModal}>
          <MaterialCommunityIcons name="dots-grid" size={32} />
        </TouchableOpacity>
        {isModalVisible && <CommonModal visible={true} onClose={closeModal} />}
        <Text style={styles.title}>Web-Mob</Text>
      </View>

      <CommonSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DAC0A3",
    width: screenWidth,
    height: wholeHeight * 0.15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 10,
  },
  secondHead: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginRight: 20,
    marginTop: 2,
    fontSize: 22,
    textTransform: "uppercase",
  },
});

export default Header;
