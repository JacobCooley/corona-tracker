import React, { useState, useContext } from "react";
import { Text, Button, View, AsyncStorage, Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppContext from "../context";
import { Container, FlexCol } from "../styles";

export function Setup() {
  const { date, setState } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const displayDate = (date = new Date()) => {
    return date.toDateString() + " - " + date.toTimeString();
  };

  const datePicker = () => {
    return (
      <DateTimePicker
        style={{ width: "100%", backgroundColor: "white", color: "black" }}
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
    );
  };

  return (
    <Container justifyContent={"center"}>
      <Text style={{ fontSize: 22, textAlign: "center", marginBottom: 20 }}>
        Please enter the date and time since you've been in quarantine
      </Text>
      {date && <Text>Set Date: {date && displayDate(date)}</Text>}
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        <FlexCol>
          <Text>Date of last exposure</Text>
          <View style={{ width: "90%" }}>
            <Button
              onPress={() => {
                setMode("date");
                setShow(true);
              }}
              title={"Set Date"}
            />
          </View>
        </FlexCol>
        <FlexCol>
          <Text>Time of last exposure</Text>
          <View style={{ width: "90%" }}>
            <Button
              onPress={() => {
                setMode("time");
                setShow(true);
              }}
              title={"Set Time"}
            />
          </View>
        </FlexCol>
      </View>
      {__DEV__ && (
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={async () => {
              AsyncStorage.removeItem("coronaDate");
              setState({ date: null });
            }}
            title={"Delete Date"}
          />
        </View>
      )}
      {show && Platform.OS === "ios" ? (
        <Modal visible={show} onDismiss={() => setShow(false)}>
          {datePicker()}
        </Modal>
      ) : (
        show && datePicker()
      )}
    </Container>
  );
}
