import React from "react";
import { View } from "react-native";
import OneItem from "./OneItem";

function ItemList({ items }) {
  return (
    <View>
      {items.map((item, index) => (
        <OneItem key={index} item={item} />
      ))}
    </View>
  );
}

export default ItemList;
