import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PlacesList } from '../components/Places/PlacesList';

export function AllPlaces() {
  return (
    <View style={styles.container}>
      <PlacesList/>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});