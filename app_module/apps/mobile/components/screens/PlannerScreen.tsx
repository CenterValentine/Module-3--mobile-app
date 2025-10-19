import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import MapScreen from '../maps/Map'
import MapTypeToggle from '../maps/MapWithPolygon'

export default function PlannerScreen() {

    return (
    <>
   <View style={[styles.content]}>
         <Text style={styles.h1}>Garden Planner</Text>
         <Text>Find your garden page!</Text>
    </View>
    <MapScreen/>
    {/* <MapTypeToggle/> */}
    </>

)
}


const styles = StyleSheet.create({
  content: { padding: 4},
  h1: { fontSize: 24, fontWeight: "600", marginBottom: 13 },
});