import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Layout } from "./components/nav/useNavigationLayout";
import { NavigationProvider } from "./components/nav/NavigationProvider";
import { NavOverlay } from "./components/nav/NavOverlay";
import HomeScreen from './components/screens/HomeScreen';


export default function App() {
return (
  <SafeAreaProvider>
  <SafeAreaView style={styles.container}>
{/* Note about SafeAreaView, protects against
Status bar icons (top of screen)
The notch on newer iPhones
The home indicator (bottom swipe bar)
*/}


     <NavigationProvider>
       <View style={styles.container}>
         {/*  Home / Plan / Settings via route */}
          <Layout />         
          {/* Pressables setRoute(...) */}
          <NavOverlay />      
        </View>
     </NavigationProvider>

  </SafeAreaView>
  </SafeAreaProvider>
)

}

const styles = StyleSheet.create({
container: { flex: 1 }
})