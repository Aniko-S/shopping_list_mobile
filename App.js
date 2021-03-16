import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native-elements";

export default function App() {
  const [text, setText] = useState("");

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text h1>Shopping list</Text>
      <StatusBar style="auto" />
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
