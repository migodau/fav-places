import React from 'react';
import { Pressable, StyleSheet, View, Image, Text } from 'react-native';
import { Colors } from '../../theme/colors';
import { MaterialIcons } from '@expo/vector-icons'; 

export function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect} style={({pressed}) => [styles.item, pressed && styles.pressed]}>
      <View style={styles.imageContainer}>
        {!!place.imageURI && <Image source={{ uri: place.imageURI }} style={styles.image} /> }
        {!place.imageURI && (
          <View style={styles.noImage}>
            <MaterialIcons name="no-photography" size={24} color="black" />
          </View>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.info}>{place.address}</Text>
      </View>
    </Pressable>
  );
}
export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.9,
  },
  imageContainer: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: 100,
  },
  noImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary200,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  }
});