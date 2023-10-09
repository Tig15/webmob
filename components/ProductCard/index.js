import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../../Redux/Action";
import CommonCard from "../Products";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProductCard = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products);

  const products = productData.products;

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CommonCard product={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
          gap: 20,
          marginLeft: 20,
        }}
      />
    </View>
  );
};

export default ProductCard;
