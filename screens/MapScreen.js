import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

const MapScreen = (props) => {
  const mapRegion = {
    latitude: 34.052235,
    longitude: -118.243683,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} region={mapRegion} />;
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
