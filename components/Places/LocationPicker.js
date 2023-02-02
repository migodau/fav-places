import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { OutlinedButton } from '../UI/OutlinedButton';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { getMapPreview } from '../../utils/location';

export function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInfo, requestPermission] = useForegroundPermissions();

  async function checkPermissions() {
    const { status } = locationPermissionInfo;
    if (status === PermissionStatus.UNDETERMINED) {
      const permitionResp = await requestPermission();
      return permitionResp.granted;
    }
    if (status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient permissions', 'You need to grant location permission to use the app');
      return false;
    }
    return true;
  }

  async function handleLocateUser() {
    const hasPermition = await checkPermissions();

    if (!hasPermition) {
      return;
    }
    const { coords } = await getCurrentPositionAsync();
    setPickedLocation({ lat: coords.latitude, lng: coords.longitude});
    console.log(getMapPreview({ lat: coords.latitude, lng: coords.longitude}));
  }
  function handlePickOnMap() {
    console.log('handlePickOnMap');
  }

  const locationPreview = pickedLocation ? 
    <Image style={styles.map} source={{
      uri: getMapPreview(pickedLocation)
    }} /> :
    <Text>No location picked yet</Text>;


  return (
    <View>
      <View style={styles.previewLocation}>
        {locationPreview}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={handleLocateUser}>Get My Location</OutlinedButton>
        <OutlinedButton icon="map" onPress={handlePickOnMap}>Pick on Map</OutlinedButton>
      </View>	
    </View>
  );
}
export const styles = StyleSheet.create({
  previewLocation: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary200,
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});