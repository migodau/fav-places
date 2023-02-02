import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed ]} onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}
export const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center'
  },
  pressed: {
    opacity: 0.8
  }
});