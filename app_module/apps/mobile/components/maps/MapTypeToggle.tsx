import React, {useState} from 'react';
import { View, TouchableOpacity, Button, StyleSheet, SafeAreaView } from 'react-native';
import type { MapType } from 'react-native-maps';
import {MaterialCommunityIcons} from '@expo/vector-icons'


// toggles satillite view
export default function MapTypeToggle() {

const [mapType, setMapType] = useState<MapType>('satellite');
const next = mapType == 'satellite' ? 'Road view' : 'satellite';
const toggleType = () => {
          setMapType(prev => (prev === 'satellite' ? 'standard' : 'satellite'));
        }

    return (
      <SafeAreaView style={{
        zIndex: 999,
        backgroundColor: 'rgba(9, 1, 1, 0.8)',
        padding: 10,
        position: 'absolute',
        bottom: 15,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

    <TouchableOpacity onPress={toggleType} style={styles.toggleTouchableO}>
      <MaterialCommunityIcons 
        name={mapType === 'satellite' ? 'map-outline' : 'satellite-variant'} 
        size={24} 
        color="#fff" 
      />
    </TouchableOpacity>
    </SafeAreaView>

    )
}

const styles = StyleSheet.create({

 toggleTouchableO: {
    zIndex: 999,
    // elevation is an android specific settings to keep
    elevation: 999,
    // padding: 10,
    backgroundColor: 'rgba(9, 1, 1, 0.8)',
    // justifyContent: 
        // alignItems: 
        

  }
});