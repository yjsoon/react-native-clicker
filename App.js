import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function renderEncouragingText() {
    if (count >= 10) {
      return "Keep going!";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80, fontWeight: "bold" }}>{count}</Text>
      <Button title="Press me!" onPress={increment}></Button>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  encouragingText: {
    marginTop: 50,
    color: "#888",
  },
});
