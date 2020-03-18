import React, { useContext, useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";
import AppContext from "./Context";

export function Timer() {
  const [start, setStart] = useState(false);
  const { date } = useContext(AppContext);
  const startTime = new Date().getTime() - date.getTime()
  return (
    <View style={styles.container}>
      {date && (
        <>
          <Stopwatch start={true} reset={!start} startTime={startTime} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
