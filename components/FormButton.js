import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

export default function FormButton(props) {
  let { text, primary, ...other } = props;

  let primaryStyling = tw`bg-blue-500 border-0 px-6 py-3 my-3 rounded`,
    secondaryStyling = tw`border-blue-500 border bg-transparent py-3 my-3 rounded`,
    primaryText = tw`text-center text-white font-bold`,
    secondaryText = tw`text-center text-blue-500 font-bold`;

  return (
    <TouchableOpacity
      style={primary ? primaryStyling : secondaryStyling}
      {...other}
    >
      <Text style={primary ? primaryText : secondaryText}>{text}</Text>
    </TouchableOpacity>
  );
}
