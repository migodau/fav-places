import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PlaceForm } from '../components/Places/PlaceForm';

export function AddPlace({ navigation }) {
  function handleAddPlace(place) {
    console.log({ place });
    navigation.navigate('AllPlaces', { place });
  }
  
  return (
    <PlaceForm onSubmit={handleAddPlace} />
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});