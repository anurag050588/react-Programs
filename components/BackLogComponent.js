import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export default class BackLogComponent extends React.Component {
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
        <Wrapper2>
          <Text1>Doneful</Text1>
          <Date>Thursday, Feb 23</Date>
        </Wrapper2>

        <Wrapper2>
          <Week>This Week</Week>
          <Month>This Month</Month>
          <Later>Later</Later>
          <Line />
        </Wrapper2>

        <You>For You</You>
        <Work>For Work</Work>

        <Wrapper3>
          <Input1 />
          <Input2 />
          <Input3 />
        </Wrapper3>

        <Underline />
      </Container>
    );
  }
}

const Container = styled.View``;

const Wrapper = styled.View``;

const Text1 = styled.Text`
  top: 25px;
  left: 23px;
  width: 50px;
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

const Wrapper2 = styled.View`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 400px;

  flex-direction: row;
`;

const Week = styled.Text`
  top: 72px;
  left: 23px;
  height: 18px;
  width: 70px;

  position: absolute;
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  font-style: normal;
`;

const Month = styled.Text`
  top: 72px;
  left: 160px;
  height: 18px;
  width: 70px;

  position: absolute;
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  font-style: normal;
`;

const Later = styled.Text`
  font-weight: normal;
  font-size: 14px;
  font-family: Roboto;
  font-style: normal;
  position: absolute;

  top: 72px;
  left: 342px;
  height: 18px;
  width: 70px;
`;

const Line = styled.View`
  position: absolute;
  width: 350px;
  height: 1px;
  left: 19px;
  top: 103px;

  background: #c4c4c4;
  /* transform: matrix{(1, 0, 0, -1, 0, 0)}; */
`;

const You = styled.Text`
  top: 132px;
  left: 100px;
  height: 18px;
  width: 60px;
  position: absolute;

  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  font-style: normal;
`;
const Work = styled.Text`
  top: 132px;
  left: 23px;
  height: 18px;
  width: 60px;
  position: absolute;

  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  font-style: normal;
`;
const Wrapper3 = styled.View`
  margin-top:07px;
`;

const Input1 = styled.TextInput`
  height: 34px;
  width: 350px;
  left: 23px;
  top: 165px;
  position: absolute;

  background-color: #c4c4c4;
`;

const Input2 = styled.TextInput`
  height: 34px;
  width: 350px;
  left: 23px;
  top: 215px;
  position: absolute;

  background-color: #c4c4c4;
`;

const Input3 = styled.TextInput`
  height: 34px;
  width: 350px;
  left: 23px;
  top: 265px;
  position: absolute;

  background-color: #c4c4c4;
`;

const Underline = styled.View``;
