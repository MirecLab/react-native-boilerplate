import React, { useContext } from "react";
import { Switch, Text } from "react-native";
import ThemeContext from "../context/Theme";
import CustomTheme from "../types/CustomTheme";
import Logger from "../config/logger/logger";

interface ThemeSwitchProps {
  theme: string;
  setTheme: (theme: string) => void;
}

let isEnabled = false;

export default function ThemeSwitch(props: ThemeSwitchProps) {
  const theme = useContext(ThemeContext) as CustomTheme;

  isEnabled = props.theme == "dark" ? true : false;
  const toggleSwitch = () => {
    if (isEnabled) {
      isEnabled = false;
      props.setTheme("light");
    } else {
      isEnabled = true;
      props.setTheme("dark");
    }
  };
  
  Logger.log("Building ThemeSwitch component")
  
  return (
    <Switch
      
      trackColor={{ false: theme.colors.variant, true: theme.colors.variant }}
      thumbColor={theme.colors.primary}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
