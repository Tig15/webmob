import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CommonCard = ({ product }) => {
  console.log("Your Products", product);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContent}>
        <Image
          source={{ uri: product.thumbnail }}
          style={{
            width: "auto",
            height: 110,
            objectFit: "cover",
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.boxContent}>
        <Text style={styles.letters}>Price: ${product.price}</Text>
        <Text style={styles.letters}>Stocks: {product.stock}</Text>
        <Text style={styles.letters}>Rating: {product.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    gap: 20,
    width: 180,
    height: 220,
  },
  imageContent: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
  boxContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  letters: {
    fontSize: 10,
  },
});

export default CommonCard;
