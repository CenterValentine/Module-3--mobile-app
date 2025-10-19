import React, {useRef, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polygon, MapType } from 'react-native-maps';
import MapTypeToggle from './MapTypeToggle';
import { SafeAreaView } from 'react-native-safe-area-context';


const CENTER = { latitude: 37.20649891449835, longitude: -113.26759442945512 }; // Hurricane, UT
const DELTA = { latitudeDelta: 0.0005, longitudeDelta: 0.0005 };

export default function MapWithPolygon() {
  const mapRef = useRef<MapView>(null)
  const [mapType, setMapType] = useState<MapType>('satellite');
  const toggleType = () => {
          setMapType(prev => (prev === 'satellite' ? 'standard' : 'satellite'));
        }

    const [polygonCoords] = useState([
    { latitude: CENTER.latitude + 0.001, longitude: CENTER.longitude + 0.001 },
    { latitude: CENTER.latitude + 0.001, longitude: CENTER.longitude - 0.001 },
    { latitude: CENTER.latitude - 0.001, longitude: CENTER.longitude - 0.001 },
    { latitude: CENTER.latitude - 0.001, longitude: CENTER.longitude + 0.001 },
  ]);



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
    }}>
<Polygon
coordinates={polygonCoords}
strokeColor="#FF0000"
strokeWidth={2}
fillColor="rgba(255,0,0,0.3)"
/> 
    <MapTypeToggle></MapTypeToggle>
    </MapView>

</>
  );
}

const styles = StyleSheet.create({
  map: { width: '100%', height: '82%' },
});