import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

function OneItem({ item, handlePress }) {
  return (
    <CheckBox
      containerStyle={styles.item}
      title={item.text}
      onPress={handlePress}
      checked={item.bought}
    />
  );
}

export default OneItem;

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
});
