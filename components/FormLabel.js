import React from "react";
import { Text } from "react-native";
import tw from "twrnc";

export default function FormLabel({ text }) {
  return <Text style={tw`text-lg p-1 font-semibold`}>{text}</Text>;
}
