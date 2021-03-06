import { StyleSheet, Text, ActivityIndicator, View } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return (
      <View>
        <ActivityIndicator
          size="large"
          color="#32CD32"
          style={styles.activityIndicator}
        />
      </View>
    );
  } else {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Circle
          center={currentLocation.coords}
          radius={35}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
    );
  }
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 400,
  },

  activityIndicator: {
    marginTop: 200,
  },
});
