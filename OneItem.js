import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

function OneItem({ item }) {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBox
      title={item}
      onPress={() => setChecked((checked) => !checked)}
      checked={checked}
    />
  );
}

export default OneItem;
