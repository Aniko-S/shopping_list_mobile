import React from "react";
import { View } from "react-native";
import OneItem from "./OneItem";

function ItemList({ items, handlePress }) {
  return (
    <View>
      {items.map((item) => (
        <OneItem
          key={item.id}
          item={item}
          handlePress={() => handlePress(item.id)}
        />
      ))}
    </View>
  );
}

export default ItemList;
