import React from "react";
import { Text } from "react-native";
import tw from "twrnc";

export default function FormLabel({ text }) {
  return <Text style={tw`text-lg font-semibold mb-2`}>{text}</Text>;
}
