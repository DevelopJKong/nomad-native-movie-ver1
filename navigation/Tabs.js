import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Movie from "../screens/Movie";
import Tv from "../screens/Tv";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: "tomato" }, tabBarActiveTintColor: "red" }}>
      <Tab.Screen
        name="Movies"
        component={Movie}
        options={{
          headerTitleStyle: { color: "tomato" },
          headerRight: () => (
            <View>
              <Text>Hello</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Tv" component={Tv} options={{ tabBarBadge: 5 }} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
