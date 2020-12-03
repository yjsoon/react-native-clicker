import React from "react";
import { Text, StyleSheet } from "react-native";

// Props:
// - color
// - fontSize
// - marginBottom
// - children

export default function CounterText(props) {
  console.log(props);
  return (
    <Text
      style={[
        styles.counterText,
        {
          color: props.color,
          fontSize: props.fontSize,
          marginBottom: props.marginBottom,
        },
      ]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  counterText: {
    fontWeight: "bold",
  },
});
