import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import CounterText from "./components/CounterText";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

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
      <CounterText></CounterText>

      <Text style={{ fontSize: 80, color: "navy", fontWeight: "bold" }}>
        {count}
      </Text>

      {
        // How it used to look
        //<Button onPress={increment} title="Press me"></Button>
      }

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
