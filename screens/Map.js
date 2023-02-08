import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IconButton } from '../components/UI/IconButton';

export function Map({ navigation }) {
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [location, setLocation] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => <IconButton icon="save" color={tintColor} size={24} onPress={confirmLocation} />
    });
  }, [navigation, location, confirmLocation])

  function handleSelectLocation(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    const loc = { lat, lng };
    // console.log(loc);
    setLocation(loc);
  }

  const confirmLocation = useCallback(() => {
    console.log(location);
    if (!location) {
      Alert.alert('No location selected', 'Please, select a location first');
      return;
    }

    navigation.navigate('AddPlace', { location });
  }, [navigation, location]);

  return (
    <MapView 
      style={styles.map} 
      initialRegion={region}
      onPress={handleSelectLocation}
    >
      { !!location && <Marker coordinate={{
        latitude: location.lat,
        longitude: location.lng,
      }} /> }
    </MapView>
  );
}
export const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
});