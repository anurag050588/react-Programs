import React from "react";
import styled from "styled-components/native";
import TodayComponent from "./components/HomeComponent";
import BackLogComponent from "./components/BackLogComponent";
import ZeroComponent from "./components/zeroComponent";

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require("./assets/avatar-default.jpg")} />
        <Title>Welcome back,</Title>
        <Name>Anurag</Name>
      </TitleBar>
      <TodayComponent />
      {/* <BackLogComponent /> */}
      {/* <ZeroComponent/> */}
    </Container>
  );
  }

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  margin-top: 40px;
  width: 100%;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  background: black;
  position: absolute;

  top: 0;
  left: 0;
`;
