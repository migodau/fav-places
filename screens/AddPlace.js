import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PlaceForm } from '../components/Places/PlaceForm';
import { insertPlace } from '../utils/database';

export function AddPlace({ navigation }) {
  async function handleAddPlace(place) {
    await insertPlace(place);
    console.log({ place });
    navigation.navigate('AllPlaces');
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