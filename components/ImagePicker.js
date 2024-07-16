import {Alert, Button, View} from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from "expo-image-picker";

export default function ImagePicker() {
  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();

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

    if (!isPermissionGranted) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    console.log(image);
  }

  return (
    <View>
      <View>

      </View>
      <Button title="Take photo" onPress={takePhotoHandler}/>
    </View>
  )
}