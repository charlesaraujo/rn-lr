import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import firebase from "firebase";
import Title from "../components/Title";
import Form from "../components/Form";
import Layout from "./Layout";

export default function Home() {
  const [errorMessage, setError] = useState(""),
    [successMessage, setSuccess] = useState("");

  const login = (email, password) => {
    if (!email && !password) {
      setError("Please enter all the required fields");
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setSuccess(`User Logged successfully ${user.user.uid}`);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
      });
  };
  return (
    <Layout>
      <View style={tw`w-3/4`}>
        <Title text="Login" />
        {!!errorMessage && (
          <Text
            style={tw`bg-red-100 p-1 my-2 text-red-900 rounded text-center`}
          >
            {errorMessage}
          </Text>
        )}
        {!!successMessage && (
          <Text
            style={tw`bg-green-100 p-1 my-2 text-green-900 rounded text-center`}
          >
            {successMessage}
          </Text>
        )}
        <Form signup={false} onSubmit={login} />
      </View>
    </Layout>
  );
}
