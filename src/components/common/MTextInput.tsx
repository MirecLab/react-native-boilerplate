import React, { useContext } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import ThemeContext from "../../context/Theme";

interface MTextInputProps {
  onChangeText: (text: string) => void;
  baseContent : string;
  placeholder?: string;
  isSecure?: boolean;
  style?: any;
}

export default function MTextInput(props: MTextInputProps) {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    text: {
      color: theme.colors.text,
      fontSize: 20,
    },
  });

  return (
    <TextInput
      defaultValue={props.baseContent}
      placeholder={props.placeholder}
      placeholderTextColor={theme.colors.text}
      secureTextEntry={props.isSecure}
      onChangeText={props.onChangeText}
      style={[styles.text, props.style ]}
    ></TextInput>
  );
}
