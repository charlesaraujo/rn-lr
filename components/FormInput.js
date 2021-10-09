import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

export default function FormInput(props) {
  let { ...other } = props;

  return (
    <TextInput style={tw`border border-blue-400 rouded px-2`} {...others} />
  );
}
