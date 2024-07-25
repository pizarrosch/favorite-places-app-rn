import MapView, {Marker} from "react-native-maps";
import {View, StyleSheet, Alert} from "react-native";
import {useState, useLayoutEffect, useCallback} from "react";
import IconButton from "../components/UI/IconButton";

export default function Map({navigation}) {

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

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('No location picked', 'Tap on the map to pick your location');
      return;
    }

    navigation.navigate('AddPlace', {
      pickedLat: selectedLocation?.lat,
      pickedLong: selectedLocation?.long
    })
  }, [navigation, selectedLocation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({tintColor}) => <IconButton icon='save' size={24} color={tintColor} onPress={savePickedLocationHandler} />
    });
  }, [navigation, savePickedLocationHandler])

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={selectLocationHandler}>
        <Marker
          title='Picked Location'
          coordinate={{
            latitude: selectedLocation?.lat,
            longitude: selectedLocation?.long
          }}
        />
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