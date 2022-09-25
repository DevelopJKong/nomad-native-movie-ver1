import styled from "styled-components/native";
import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movie: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation: { navigate } }: any) => {
  return (
    <Container>
      <Swiper
        loop
        autoplay={true}
        autoplayTimeout={3.5}
        containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
        dotStyle={{ display: "none" }}
        activeDotStyle={{ display: "none" }}
      >
        <View style={{ backgroundColor: "red" }}></View>
        <View style={{ backgroundColor: "blue" }}></View>
        <View style={{ backgroundColor: "red" }}></View>
        <View style={{ backgroundColor: "blue" }}></View>
      </Swiper>
    </Container>
  );
};

export default Movie;
