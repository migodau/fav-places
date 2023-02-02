import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageURI }} />
      <Text>{place.title}</Text>
      <Text>{place.address}</Text>
    </Pressable>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});