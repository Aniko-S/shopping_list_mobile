import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox, Icon } from "react-native-elements";

function OneItem({ item, handlePress, deleteItem }) {
  return (
    <View style={styles.line}>
      <CheckBox
        containerStyle={styles.item}
        textStyle={{ fontSize: 20 }}
        title={item.text}
        onPress={handlePress}
        checked={item.bought}
      />
      <Icon
        name="close"
        type="evilicon"
        color="red"
        size={50}
        onPress={deleteItem}
      />
    </View>
  );
}

export default OneItem;

const styles = StyleSheet.create({
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  item: {
    width: "85%",
  },
});
