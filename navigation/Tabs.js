import { useColorScheme, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Movie from "../screens/Movie";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme();
  return (
    <>
      <StatusBar backgroundColor="#1e272e" style={{ color: "white" }} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: isDark ? BLACK_COLOR : "white" },
          tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
          tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
          headerStyle: {
            backgroundColor: isDark ? BLACK_COLOR : "white",
          },
          headerTitleStyle: {
            color: isDark ? "white" : BLACK_COLOR,
          },
          tabBarLabelStyle: {
            marginTop:-5,
            fontSize: 12,
          }
        }}
      >
        <Tab.Screen
          name="Movie"
          component={Movie}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="film-outline" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="TV"
          component={Tv}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="tv-outline" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="search-outline" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
