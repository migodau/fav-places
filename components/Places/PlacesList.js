import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { PlaceItem } from './PlaceItem';

export function PlacesList({ places }) {

  if (!places) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>No places to be shown</Text>
      </View>
    );
  }

  return (
    <FlatList 
      style={styles.list}
      data={places} 
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => <PlaceItem place={item} />}>
    </FlatList>
  );
}
export const styles = StyleSheet.create({
  list: {
    margin: 8,
  },
  fallback: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  }
});