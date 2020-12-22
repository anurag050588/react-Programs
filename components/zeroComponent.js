import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export default class ZeroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      item: {},
    };
  }

  render() {
    return (
      <Container>
        <Wrapper1>
          <Text1>YUPlanner</Text1>
          <Date>Thursday, Feb 23</Date>
        </Wrapper1>
        <Today>Today</Today>

        <Wrapper2>
          <TaskList>Tasklist Zero</TaskList>
          <Text2>Well done mate.You WON today!</Text2>
        </Wrapper2>
      </Container>
    );
  }
}

const Container = styled.View``;
const Wrapper1 = styled.View``;

const Text1 = styled.Text`
  top: 25px;
  left: 23px;
  width: 70px;
  height: 18px;

  position: absolute;
  font-style: normal;
  font-weight: normal;
  font-family: Roboto;
  font-size: 14px;
`;

const Date = styled.Text`
  top: 25px;
  left: 285px;
  width: 100px;
  height: 18px;

  position: absolute;
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  font-style: normal;
`;

const Today = styled.Text`
  width: 40px;
  height: 14px;
  left: 23px;
  top: 76px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  position: absolute;
`;

const Wrapper2 = styled.View`
  background-color: lightcyan;

  margin-left: 23px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TaskList = styled.Text`
  position: absolute;
  width: 289px;
  height: 109px;
  left: 23px;
  top: 121px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 59px;
  text-align: center;

  color: #000000;
`;
const Text2 = styled.Text`
  top: 200px;
  left: 50px;
  width: 250px;
  position: absolute;
  text-align: center;
`;
