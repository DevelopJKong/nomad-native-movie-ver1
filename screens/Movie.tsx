import styled from "styled-components/native";
import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movie: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation: { navigate } }: any) => {
  const getNowPlaying = () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`);
  };
  return (
    <Container>
      {/**@ts-ignore */}
      <Swiper loop timeout={3.5} controlsEnabled={false} containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}>
        <View style={{ backgroundColor: "red" }}></View>
        <View style={{ backgroundColor: "blue" }}></View>
        <View style={{ backgroundColor: "red" }}></View>
        <View style={{ backgroundColor: "blue" }}></View>
      </Swiper>
    </Container>
  );
};

export default Movie;
