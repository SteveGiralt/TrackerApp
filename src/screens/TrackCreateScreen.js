import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";

import { withNavigationFocus } from "react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";

import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Text h3>Create Track</Text>
      <Map />
      {err ? <Text>Please Enable Location Services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
