import React from "react";
import { View, Text } from "react-native";

function ItemList({ items }) {
  return (
    <View>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}

export default ItemList;
