import MapView, {Marker} from "react-native-maps";
import {View, StyleSheet} from "react-native";
import {useState} from "react";

export default function Map() {

  const [selectedLocation, setSelectedLocation] = useState(null);

  const region = {
    latitude: 34.9496,
    longitude: -81.9317,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08
  }

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const long = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({
      lat: lat,
      long: long
    })
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={selectLocationHandler}>
        {selectedLocation &&
          (<Marker
              title='Picked Location'
              coordinate={{
                latitude: selectedLocation.lat,
                longitude: selectedLocation.long
              }}
            />
          )}
      </MapView>
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