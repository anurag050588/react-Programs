import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      item: {},
    };
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Wrapper>
            <Planner>YUPlanner</Planner>
            <Date>Thursday, feb 23</Date>
          </Wrapper>

          <Today>Today</Today>
          <Subtitle>One big thing for Today</Subtitle>
          <TextInput1 />
          <ImportantThings>Other important things</ImportantThings>

          <Priority1 />
          <Priority2 />
          <Priority3 />
        </Container>
      </ScrollView>
    );
  }
}

const Container = styled.View`
  color: #456484;
  height: 750px;
`;

const Today = styled.Text`
  width: 33px;
  height: 14px;
  left: 23px;
  top: 76px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  position: absolute;
`;

const Subtitle = styled.Text`
  width: 150px;
  height: 14px;
  margin-left: 23px;
  margin-top: 121px;
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
`;

const TextInput1 = styled.TextInput`
  width: 356px;
  height: 96px;
  margin-left: 23px;
  margin-top: 151px;
  position: absolute;
  background: #c4c4c4;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding-left: 20px;

  color: #000000;
`;

const Wrapper = styled.View``;

const Planner = styled.Text`
  width: 60px;
  height: 14px;
  margin-left: 23px;
  margin-top: 21px;
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;
const Date = styled.Text`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  width: 91px;
  height: 14px;
  top: 21px;
  left: 288px;
  position: absolute;
`;

const ImportantThings = styled.Text`
  width: 150px;
  height: 14px;
  margin-left: 23px;
  top: 271px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  position: absolute;
`;
const Priority1 = styled.TextInput`
  width: 356px;
  height: 96px;
  left: 23px;
  top: 295px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  margin-top: 25px;
  padding-left: 20px;
  position: absolute;
  background-color: #c4c4c4;
`;

const Priority2 = styled.TextInput`
  width: 356px;
  height: 96px;
  left: 23px;
  top: 405px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  background-color: #c4c4c4;
  margin-top: 20px;
  padding-left: 20px;
  position: absolute;
`;
const Priority3 = styled.TextInput`
  width: 356px;
  height: 96px;
  left: 23px;
  top: 510px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  background-color: #c4c4c4;
  padding-left: 20px;
  margin-top: 20px;
  position: absolute;
`;
