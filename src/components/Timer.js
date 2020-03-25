import React, { useContext, useState, useEffect, useRef } from "react";
import AppContext from "../context";
import { FlexRow, Container, Header } from "../styles";
import { Text, AppState } from "react-native";
import styled from "styled-components";

const ClockText = styled.Text`
  font-size: 32px;
`;

const Risk = styled.View`
  display: flex;
  background-color: ${props =>
    props.risk === "high"
      ? "tomato"
      : props.risk === "med"
      ? "#BDB76B"
      : "forestgreen"};
  color: white;
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: center;
`;
export function Timer() {
  const { date } = useContext(AppContext);
  const setDate = () => {
    const diff = new Date().getTime() - date.getTime();
    return {
      sec: Math.floor((diff / 1000) % 60),
      min: Math.floor((diff / 1000 / 60) % 60),
      hour: Math.floor((diff / 1000 / 60 / 60) % 24),
      day: Math.floor(diff / 1000 / 60 / 60 / 24)
    };
  };
  const [state, setState] = useState(setDate());

  useEffect(() => {
    const timer = setInterval(() => {
      if (state.sec !== 59) {
        setState({
          ...state,
          sec: ++state.sec
        });
      } else if (state.min !== 59) {
        setState({
          ...state,
          min: ++state.min,
          sec: 0
        });
      } else if (state.hour !== 23) {
        setState({
          ...state,
          sec: 0,
          min: 0,
          hour: ++state.hour
        });
      } else {
        setState({
          ...state,
          sec: 0,
          min: 0,
          hour: 0,
          day: ++state.day
        });
      }
    }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [state]);

  useEffect(() => {
    AppState.addEventListener("change", handleChange);
    return () => {
      AppState.removeEventListener("change", handleChange);
    };
  }, []);

  const handleChange = newState => {
    if (newState === "active") {
      setState(setDate());
    }
  };

  let padToTwo = number => (number <= 9 ? `0${number}` : number);

  const riskHeader =
    state.day < 6 ? "High Risk" : state.day < 11 ? "Medium Risk" : "Low Risk";
  const livesSaved = (10 * state.day) + (state.hour + 1 / 24);
  return (
    <Container>
      {date && (
        <>
          <Risk risk={state.day < 6 ? "high" : state.day < 11 ? "med" : "low"}>
            <Header>{riskHeader}</Header>
          </Risk>
          <FlexRow flex={1}>
            <ClockText>{padToTwo(state.day) + " : "}</ClockText>
            <ClockText>{padToTwo(state.hour) + " : "}</ClockText>
            <ClockText>{padToTwo(state.min) + " : "}</ClockText>
            <ClockText>{padToTwo(state.sec)}</ClockText>
          </FlexRow>
          <Text style={{ flex: 1, fontSize: 18 }}>
            Since last exposure to the public
          </Text>
          <Text style={{ flex: 1, fontSize: 16 }}>
            You've saved {livesSaved.toFixed(2)} lives
          </Text>
        </>
      )}
    </Container>
  );
}
