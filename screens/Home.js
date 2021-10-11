import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import Title from "../components/Title";
import Form from "../components/Form";
import Layout from "./Layout";

export default function Home() {
  const login = (email, password) => {
    alert(email);
  };
  return (
    <Layout>
      <View style={tw`w-3/4`}>
        <Title text="Login" />
        <Form signup={false} onSubmit={login} />
      </View>
    </Layout>
  );
}
