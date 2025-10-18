import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import type { MapType } from 'react-native-maps';


interface Props {
  mapType: MapType;
  onToggle: () => void;
}

export default function MapTypeToggle({ mapType, onToggle }: Props) {
const next = mapType == 'satellite' ? 'Road view' : 'satellite';

    return (<SafeAreaView style={styles.container}>
        <Button title={`Switch to ${next}`}
                onPress={onToggle}
color={mapType === 'satellite' ? '#2196F3' : '#4CAF50'}
/>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 8,
    overflow: 'hidden',
  },
});