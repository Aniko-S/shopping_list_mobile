import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, Input, Button } from "react-native-elements";
import ItemList from "./ItemList";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);

  const addNewItem = (text) => {
    setId((id) => id + 1);
    setItems((items) => [{ id, text, bought: false }, ...items]);
    setText("");
  };

  const check = (id) => {
    let checkedItem = items.find((item) => item.id === id);
    checkedItem.bought = !checkedItem.bought;
    setItems([...items]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text h1>Shopping list</Text>
        <View style={styles.line}>
          <TextInput
            style={styles.input}
            placeholder="New item"
            onChangeText={(text) => setText(text)}
            value={text}
          />
          <Button title="Add" onPress={() => addNewItem(text)} />
        </View>
        <ItemList items={items} handlePress={check} deleteItem={deleteItem} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    width: "100%",
  },
  input: {
    width: "85%",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "grey",
  },
});
