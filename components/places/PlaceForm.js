import {View, Text, ScrollView, TextInput, StyleSheet} from "react-native";
import {useState} from "react";
import {Colors} from "../../constants/Colors";
import ImagePicker from "../ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm({label}) {

  const [enteredTitle, setEnteredTitle] = useState('');

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <View>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>{label}</Text>
          <TextInput onChangeText={changeTitleHandler} value={enteredTitle} style={styles.input}/>
        </View>
        <ImagePicker />
        <LocationPicker />

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