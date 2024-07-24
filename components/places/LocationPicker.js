import {View, StyleSheet, Alert, Image, Text} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {Colors} from "../../constants/Colors";
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from "expo-location";
import {useState} from "react";
import {getMapPreview} from "../../util/location";

export default function LocationPicker() {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState(null);

  async function verifyPermission() {

    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert('Permission is missing', 'Please go to settings and allow your device to use your location');
      return false;
    }
  }

  async function getLocationHandler() {
    await verifyPermission();
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      long: location.coords.longitude
    })
  }

  function pickOnMapHandler() {

  }

  let locationPreview = !pickedLocation ?
    <Text>No location picked yet</Text> :
    <Image style={styles.mapPreviewImg} source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.long)}}/>

  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
      <View style={styles.buttonsContainer}>
        <OutlinedButton icon='location' onPress={getLocationHandler}>Locate User</OutlinedButton>
        <OutlinedButton icon='map' onPress={pickOnMapHandler}>Pick On Map</OutlinedButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mapPreviewImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4
  }
})