import MapView, {Marker} from "react-native-maps";
import {View, StyleSheet} from "react-native";

export default function Map() {
  const region = {
    latitude: 34.9496,
    longitude: -81.9317,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08
  }

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} initialRegion={region}></MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  }
})