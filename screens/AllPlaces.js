import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PlacesList } from '../components/Places/PlacesList';
import { getPlaces } from '../utils/database';

export function AllPlaces() {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const resp = await getPlaces();
      setPlaces(resp);
    };

    fetchPlaces();
  }, [isFocused])

  // useEffect(() => {
  //   if(!isFocused || !route.params) {
  //     return;
  //   }

  //   setPlaces(currentPlaces => [...currentPlaces, route.params.place ]);
  // }, [isFocused, route]);

  return (
    <View style={styles.container}>
      <PlacesList places={places}/>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});