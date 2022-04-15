import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

TrackDetailScreen.navigationOptions = () => {
  return {
    title: "",
  };
};

export default TrackDetailScreen;
