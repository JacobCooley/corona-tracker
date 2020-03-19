import React, { useState, useContext } from "react";
import { StyleSheet, Text, Button, View, AsyncStorage } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppContext from "../context";
import { FlexRow, Container, FlexCol } from "../styles";

export function Setup() {
  const { date, setState } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const displayDate = (date = new Date()) => {
    return date.toDateString() + " - " + date.toTimeString();
  };
  return (
    <Container justifyContent={'center'}>
      <Text>Set Date: {date && displayDate(date)}</Text>
      <View style={{marginTop: 20, display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
          <FlexCol>
            <Text>Date of last exposure</Text>
            <Button
              onPress={() => {
                setMode("date");
                setShow(true);
              }}
              title={"Set Date"}
            />
          </FlexCol>
          <FlexCol>
            <Text>Time of last exposure</Text>
            <Button
              onPress={() => {
                setMode("time");
                setShow(true);
              }}
              title={"Set Time"}
            />
          </FlexCol>
        </View>
      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode={mode}
          maximumDate={new Date()}
          is24Hour={true}
          display="default"
          onChange={e => {
            setShow(false);
            const time = e.nativeEvent.timestamp;
            if (time) {
              setState({ date: new Date(time) });
              AsyncStorage.setItem("coronaDate", time.toString());
            }
          }}
        />
      )}
    </Container>
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
