import React, {useRef, useState} from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, MapType } from 'react-native-maps';
import MapTypeToggle from './MapTypeToggle';


const CENTER = { latitude: 37.20649891449835, longitude: -113.26759442945512 }; // Hurricane, UT
const DELTA = { latitudeDelta: 0.0005, longitudeDelta: 0.0005 };

export default function MapScreen() {
  const mapRef = useRef<MapView>(null)
  const [mapType, setMapType] = useState<MapType>('satellite');
  const toggleType = () => {
          setMapType(prev => (prev === 'satellite' ? 'standard' : 'satellite'));
        }

  return (
    <>
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}    //auth
      ref={mapRef}
      mapType={mapType}             //Satellite or standard (road)
      initialCamera={{ center: CENTER, zoom: 12, heading: 0, pitch: 0, altitude: 0 }}

      // Zooming into coordinates as soon as possible.
      onMapReady={() => {mapRef.current?.animateToRegion({ ...CENTER, ...DELTA }, 500)
      
    console.log('[Map] onMapReady fired')
    }}

      // onLayout={e => {
      //   const { width, height } = e.nativeEvent.layout;
      //     console.log('[Map layout]', { width, height });
      // }}
      // onRegionChangeComplete={r => console.log('[Map] region', r)}
    >

      {/* <Marker coordinate={UT} title="Hello" /> */}
    </MapView>
     <MapTypeToggle mapType={mapType} onToggle={toggleType}/>
     </>
  );
}


const styles = StyleSheet.create({
  map: { flex: 1, width: '100%', height: '100%' },
});