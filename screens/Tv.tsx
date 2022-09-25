import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Btn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Tv = () => {
  return (
    <Btn>
      <Title>Tv</Title>
    </Btn>
  );
};

export default Tv;
