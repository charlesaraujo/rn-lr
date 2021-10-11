import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Form from "../components/Form";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title text="Login" />
      <Form />
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
});
