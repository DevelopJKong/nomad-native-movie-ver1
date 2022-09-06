import Tabs from "./navigation/Tabs";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import Root from "./navigation/Root";

export default function App() {
  const isDark = useColorScheme();
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Root />
    </NavigationContainer>
  );
}
