import {View, Text, ScrollView, TextInput, StyleSheet} from "react-native";
import {useCallback, useState} from "react";
import {Colors} from "../../constants/Colors";
import ImagePicker from "../ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import {Place} from "../../models/Place";

export default function PlaceForm({label, onCreatePlace}) {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [pickedLocation, setPickedLocation] = useState('');
  const [takenImage, setTakenImage] = useState('');

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(imageUri) {
    setTakenImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    const savedData = new Place(enteredTitle, takenImage, pickedLocation);
    onCreatePlace(savedData);
  }

  return (
    <View>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>{label}</Text>
          <TextInput onChangeText={changeTitleHandler} value={enteredTitle} style={styles.input}/>
        </View>
        <ImagePicker onTakeImage={takeImageHandler}/>
        <LocationPicker onPickLocation={pickLocationHandler}/>
        <Button onPress={savePlaceHandler}>Add place</Button>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    padding: 24
  },
  input: {
    backgroundColor: Colors.primary100,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2
  },
  label: {
    color: Colors.primary50,
    fontWeight: "bold"
  }
})