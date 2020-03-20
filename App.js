import React, { useReducer, useState, useEffect } from "react";
import { Setup } from "./src/components/Setup";
import AppContext, { AppInitialValues } from "./src/context";
import { Timer } from "./src/components/Timer";
import { AsyncStorage, View } from "react-native";
import { FlexRow, Container, StyledButton } from "./src/styles";
import { Faq } from "./src/components/Faq";
import styled from "styled-components";

const Pages = {
  TIMER: 0,
  SETUP: 1,
  FAQ: 2
};

const ButtonView = styled(FlexRow)`
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 40px;
  height: 10%;
`;
const App = () => {
  const [state, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    AppInitialValues
  );
  const [page, setPage] = useState(null);

  useEffect(() => {
    (async () => {
      const current = (await AsyncStorage.getItem("coronaDate")) || null;
      if (current) {
        setState({ date: new Date(parseFloat(current)) });
        setPage(Pages.TIMER)
      }
      else setPage(Pages.SETUP);
    })();
  }, []);

  const NavButtons =
    page === Pages.TIMER ? (
      <StyledButton title={"Setup"} onPress={() => setPage(Pages.SETUP)} />
    ) : (
      (page === Pages.SETUP || page === Pages.FAQ) &&
      state.date && (
        <StyledButton title={"Timer"} onPress={() => setPage(Pages.TIMER)} />
      )
    );
  const Body =
    page === Pages.TIMER && state.date ? (
      <>
        <Timer />
      </>
    ) : page === Pages.SETUP || !state.date ? (
      <>
        <Setup />
      </>
    ) : (
      page === Pages.FAQ && (
        <>
          <Faq />
        </>
      )
    );

  return (
    <AppContext.Provider value={{ ...state, setState }}>
      <Container style={{ padding: 0 }}>
        <View
          style={{
            display: "flex",
            flex: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {page !== null ? Body : null}
        </View>
        <ButtonView>
          <View style={{ width: "30%" }}>{NavButtons}</View>
          {page !== Pages.FAQ && state.date && (
            <View style={{ width: "30%" }}>
              <StyledButton title={"FAQ"} onPress={() => setPage(Pages.FAQ)} />
            </View>
          )}
        </ButtonView>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
