import React from "react";
import { View } from "react-native";
import OneItem from "./OneItem";

function ItemList({ items, handlePress }) {
  return (
    <View>
      {items
        .sort((item1, item2) => {
          if (item1.bought && !item2.bought) return 1;
          if (item2.bought && !item1.bought) return -1;
          return 0;
        })
        .map((item) => (
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
