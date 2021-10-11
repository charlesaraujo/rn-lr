import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import FormLabel from "./FormLabel";

const FormInputGroup = ({ children }) => {
  return <View style={tw`my-3 space-y-2`}>{children}</View>;
};

export default function Form() {
  return (
    <View>
      <FormInputGroup>
        <FormLabel text="email" />
      </FormInputGroup>
    </View>
  );
}
