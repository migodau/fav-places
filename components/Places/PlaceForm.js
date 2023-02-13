import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Place } from '../../models/place';
import { Colors } from '../../theme/colors';
import { Button } from '../UI/Button';
import { ImagePicker } from './ImagePicker';
import { LocationPicker } from './LocationPicker';

export function PlaceForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  function handleChangeTitle(text) {
    setTitle(text);
  }

  const handlePickImage = useCallback((image) => {
    console.log('handlePickImage', image);
    setImage(image);
  }, []);

  const handlePickLocation = useCallback((location) => {
    console.log('handlePickImage', location);
    setLocation(location);
  }, []);

  function handleSavePlace() {
    console.log('handleSavePlace', {
      title,
      image,
      location
    });
    const place = new Place(title, image, location);
    onSubmit(place);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={handleChangeTitle} value={title}/>
      </View>
      <ImagePicker onPickImage={handlePickImage} />
      <LocationPicker onPickLocation={handlePickLocation} />
      <View style={styles.actions}>
        <Button onPress={handleSavePlace}>Add Place</Button>
      </View>
    </ScrollView>
  );
}
export const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary50,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
  actions: {
    paddingVertical: 24,
  }
});