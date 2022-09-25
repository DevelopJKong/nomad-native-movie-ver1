import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import React from "react";

const Btn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
const Movie = ({ navigation: { navigate } }: any) => {
  return (
    <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
      <Title>Movie</Title>
      <Title>Movie</Title>
    </Btn>
  );
};

export default Movie;