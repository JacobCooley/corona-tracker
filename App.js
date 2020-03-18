import React, { useReducer, useState, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Setup } from "./src/Setup";
import AppContext, { AppInitialValues } from "./src/Context";
import { Timer } from "./src/Timer";
import { AsyncStorage } from "react-native";

const Pages = {
  TIMER: 0,
  SETUP: 1
};
const App = () => {
  const [page, setPage] = useState(Pages.TIMER);
  const [state, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    AppInitialValues
  );
  useEffect(() => {
    (async () => {
      const current = (await AsyncStorage.getItem("coronaDate")) || null;
      console.log("cur", new Date(parseFloat(current)));
      setState({ date: new Date(parseFloat(current)) });
    })();
  }, []);
  console.log("state", state);
  return (
    <AppContext.Provider value={{ ...state, setState }}>
      <View style={styles.container}>
        <Text>Coronavirus Stopwatch</Text>
        {page === Pages.TIMER && state.date ? (
          <>
            <Button title={"Setup"} onPress={() => setPage(Pages.SETUP)} />
            <Timer />
          </>
        ) : (
          <>
            <Button title={"Timer"} onPress={() => setPage(Pages.TIMER)} />
            <Setup />
          </>
        )}
      </View>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default App;
