import {View, StyleSheet, Alert} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {Colors} from "../../constants/Colors";
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from "expo-location";

export default function LocationPicker() {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
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
    console.log(location);
  }

  function pickOnMapHandler() {

  }

  return (
    <View>
      <View style={styles.mapPreview}>

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
    backgroundColor: Colors.primary100
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})