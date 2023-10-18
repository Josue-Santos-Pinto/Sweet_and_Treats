import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import MapView, { Marker } from 'react-native-maps';
import { request, PERMISSIONS } from 'react-native-permissions';
import GetLocation from 'react-native-get-location';

type CurrentLocationType = {
  latitude: number;
  longitude: number;
};
export default function Location() {
  const [currentLongitude, setCurrentLongitude] = useState<number | null>(null);
  const [currentLatitude, setCurrentLatitude] = useState<number | null>(null);

  const destinationCoords = {
    latitude: -22.828870998276898,
    longitude: -42.091118816140714,
  };

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then((location) => {
        setCurrentLatitude(location.latitude);
        setCurrentLongitude(location.longitude);
        console.log(location.longitude);
        getLocation();
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  };

  const requestLocationPermission = async () => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
      if (result == 'granted') {
        getLocation();
      }
    });
  };

  useEffect(() => {
    // Obter a localização atual do usuário
    requestLocationPermission();
  }, []);

  return (
    <Container>
      {currentLongitude && currentLatitude && (
        <MapView
          style={{ flex: 1, width: '100%' }}
          initialRegion={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: currentLatitude,
              longitude: currentLongitude,
            }}
          />
        </MapView>
      )}
    </Container>
  );
}
