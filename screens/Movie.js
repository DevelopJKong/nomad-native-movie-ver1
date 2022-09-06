import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Movie = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Stack", { screen: "Three" })}>
      <Text style={{ color: "white" }}>Movie</Text>
    </TouchableOpacity>
  );
};

export default Movie;
