import {Alert, Button, View, Image, Text, StyleSheet} from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from "expo-image-picker";
import {useState} from "react";
import {Colors} from "../constants/Colors";
import OutlineButton from "./UI/OutlineButton";

export default function ImagePicker() {
  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();
  const [takenPhoto, setTakenPhoto] = useState('');

  async function verifyPermissions() {
    if (cameraPermissionStatus.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionStatus.status === PermissionStatus.DENIED) {
      Alert.alert('Permission is missing', 'Please go to settings and allow your device to take photos');
      return false;
    }
  }

  async function takePhotoHandler() {
    const isPermissionGranted = await verifyPermissions();

    // if (!isPermissionGranted) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    const imageURI = image.assets.map(image => image.uri).toString();
    setTakenPhoto(imageURI);
    console.log(takenPhoto)
  }

  let imagePreview = <Text style={styles.fallbackText}>No image taken yet</Text>

  if (takenPhoto) {
    imagePreview = <Image source={{uri: takenPhoto}} style={styles.image}/>
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        {imagePreview}
      </View>
      <OutlineButton icon='camera' onPress={takePhotoHandler}>Take Photo</OutlineButton>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 200,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: Colors.primary100
  },
  image: {
    width: '100%',
    height: '100%'
  },
  fallbackText: {
    fontSize: 16
  }
})