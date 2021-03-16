import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

function OneItem({ item, handlePress }) {
  return (
    <CheckBox title={item.text} onPress={handlePress} checked={item.bought} />
  );
}

export default OneItem;
