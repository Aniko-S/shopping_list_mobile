import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, Input, Button } from "react-native-elements";
import ItemList from "./ItemList";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const addNewItem = (text) => {
    setItems((items) => [text, ...items]);
    setText("");
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text h1>Shopping list</Text>
        <Input
          placeholder="New item"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Button title="Add" onPress={() => addNewItem(text)} />
        <ItemList items={items} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 25,
  },
});
