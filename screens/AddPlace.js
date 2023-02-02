import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PlaceForm } from '../components/Places/PlaceForm';

export function AddPlace() {
  return (
    <PlaceForm />
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});