import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  function renderEncouragingText() {
    if (count >= 30) {
      return "Wah, hand pain or not?";
    }
    if (count >= 20) {
      return "Hang in there!";
    }
    if (count >= 10) {
      return "Keep going!";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80, fontWeight: "bold" }}>{count}</Text>
      <Button title="Press me!" onPress={() => setCount(count + 1)}></Button>
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
    fontSize: 16,
  },
});
