import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import React, { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <KeyboardAvoidingView>
      <Spacer>
        <Input
          placeholder="Enter Name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button
            title="Stop Recording"
            onPress={stopRecording}
            buttonStyle={{ backgroundColor: "red" }}
          />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </KeyboardAvoidingView>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
