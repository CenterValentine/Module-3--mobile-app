import React from "react";
import { Dimensions, View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNav } from "../nav/NavigationProvider"; 

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {

   const { setRoute } = useNav();
  return (
    <View style={styles.screen}>



  
 <Pressable
  style={({ pressed }) => [
    styles.heroButton,
    pressed && styles.heroButtonPressed,
    
  ]}
  onPress={() => setRoute("plan")}
>
  <Text style={styles.heroButtonText}>Get Started</Text>
</Pressable>

         

      <Image
        source={require("../../assets/hero-image3.png")}
        style={styles.screen}
      />
      <View style={styles.hidden}>
        <Text style={styles.h1}>Garden Plot</Text>
        <Text>Plot your garden, your way</Text>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, height: '100%', maxWidth: SCREEN_WIDTH},
  image: {width: SCREEN_WIDTH, aspectRatio: 2, height: '100%'},
  // overlay: { padding: 16, flex: 1, width: SCREEN_WIDTH, zIndex: 999, elevation: 999},
  h1: { fontSize: 24, fontWeight: "600", marginBottom: 12 },
  hidden: {},
  heroButton: {padding: 7 , position: 'absolute', zIndex: 999, width: 100, borderRadius: 6, backgroundColor: 'white', right: SCREEN_WIDTH/2, top: SCREEN_WIDTH },

    heroButtonPressed: {padding: 7 , position: 'absolute', zIndex: 999, width: 100, borderRadius: 6, backgroundColor: 'gray', right: SCREEN_WIDTH/2, top: SCREEN_WIDTH },

  heroButtonText: {fontSize: 24, textAlign: 'center'},


});