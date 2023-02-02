import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Colors } from '../../theme/colors';
import { OutlinedButton } from '../UI/OutlinedButton';

export function ImagePicker() {

  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState({});

  async function checkPermissions() {
    const { status } = cameraPermissionInfo;
    if (status === PermissionStatus.UNDETERMINED) {
      const permitionResp = await requestPermission();
      return permitionResp.granted;
    }

    if (status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient permissions', 'You need to grant camera permission to use the app');
      return false;
    }

    return true;
  }

  async function handleTakePicture() {
    const hasPermition = await checkPermissions();

    if (!hasPermition) {
      return;
    }

    const cameraOptions = {
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    };
    const result = await launchCameraAsync(cameraOptions);
    console.log('handleTakeImage');
    if (!result.canceled) {
      console.log(result.assets[0], result.assets[0].uri);
      setPickedImage(result.assets[0]);
    }
  }

  let imagePreview = !pickedImage?.uri ?
    <Text>No image taken yet</Text> :
    <Image source={{uri: pickedImage.uri }} style={styles.image} />;


  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <OutlinedButton icon="camera" onPress={handleTakePicture}>Take a picture</OutlinedButton>
    </View>
  );
}
export const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary200,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});