import React from "react";
import { Text } from "react-native";
import tw from "twrnc";

export default function Title({ text }) {
  return <Text style={tw`text-2x1 font-bold tracking-wide p-2`}>{text}</Text>;
}
