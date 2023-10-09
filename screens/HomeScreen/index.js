import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Header />
      </View>
      <View style={{ flex: 1 }}>
        <ProductCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
