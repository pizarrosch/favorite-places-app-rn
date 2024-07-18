import {View, StyleSheet} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {Colors} from "../../constants/Colors";

export default function LocationPicker() {

  function getLocationHandler() {

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