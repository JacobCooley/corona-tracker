import React, { useState, useContext } from "react";
import { StyleSheet, Text, Button, View, AsyncStorage } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppContext from "./Context";

export function Setup() {
  const { date, setState } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const displayDate = (date = new Date()) => {
    return date.toDateString() + " - " + date.toTimeString()
  }
  console.log('dat', date)
  return (
    <View style={styles.container}>
      <Text>Date of last exposure</Text>
      <Button
        onPress={() => {
          setShow(true);
          setMode("date");
        }}
        title={"Set Date"}
      />
      <Text>Time of last exposure</Text>
      <Button
        onPress={() => {
          setShow(true);
          setMode("time");
        }}
        title={"Set Time"}
      />
      {show && date && (
        <DateTimePicker
          value={date}
          mode={mode}
          maximumDate={new Date()}
          is24Hour={true}
          display="default"
          onChange={e => {
            setShow(false);
            const time = e.nativeEvent.timestamp
            if (time) {
              setState({ date: new Date(time) });
              AsyncStorage.setItem('coronaDate', time.toString())
            }
          }}
        />
      )}
      <Text>Set Date: {date && displayDate(date)}</Text>
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
