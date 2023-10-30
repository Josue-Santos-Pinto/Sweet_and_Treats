import React, { useEffect, useState, useRef } from 'react';
import { Container } from './styles';
import MapView, { Marker, MapCircle } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { MAPS_KEY } from '../../helpers';
import { Alert } from 'react-native';
import LocationInfo from '../../components/LocationInfo';
type MapLocType = {
  name?: string;
  center: {
    latitude: number;
    longitude: number;
  };
  zoom: number;
  pitch: number;
  altitude: number;
  heading: number;
};
export default function Location() {
  const mapRef = useRef<MapView>(null);

  const [mapLoc, setMapLoc] = useState<MapLocType>({
    center: {
      latitude: -22.828870998276898,
      longitude: -42.091118816140714,
    },
    zoom: 12,
    pitch: 0,
    altitude: 0,
    heading: 0,
  });

  const [fromLoc, setFromLoc] = useState<MapLocType>();
  const [requestDistance, setRequestDistance] = useState<number>();
  const [requestTime, setRequestTime] = useState<number>();

  const destinationCoords = {
    latitude: -22.828870998276898,
    longitude: -42.091118816140714,
  };
  let options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0,
  };

  const getMyCurrentPosition = () => {
    Geolocation.watchPosition(
      async (info) => {
        const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);

        if (geo.results.length > 0) {
          const loc: MapLocType = {
            name: geo.results[0].formatted_address,
            center: {
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            },
            zoom: 16,
            pitch: 0,
            altitude: 0,
            heading: 0,
          };
          setMapLoc(loc);
          setFromLoc(loc);
        }
      },
      (error) => {
        Alert.alert('erro', error.toString());
      },
      options
    );
  };

  const handleDirectionsReady = (r: any) => {
    setRequestDistance(r.distance);
    setRequestTime(r.duration);
  };

  useEffect(() => {
    Geocoder.init(MAPS_KEY, { language: 'pt-br' });
    getMyCurrentPosition();
  }, []);

  return (
    <Container>
      <MapView
        style={{ flex: 1, width: '100%', paddingTop: 40 }}
        ref={mapRef}
        provider="google"
        camera={mapLoc}
      >
        {fromLoc && (
          <>
            <MapViewDirections
              origin={fromLoc.center}
              destination={destinationCoords}
              strokeWidth={8}
              strokeColor="#4870ff"
              apikey={MAPS_KEY}
              onReady={handleDirectionsReady}
            />
            <Marker coordinate={fromLoc?.center} image={require('../../assets/icons/marker.png')} />
          </>
        )}

        <Marker coordinate={destinationCoords} />
      </MapView>
      {requestDistance && requestTime && (
        <LocationInfo distance={requestDistance} time={requestTime} />
      )}
    </Container>
  );
}
