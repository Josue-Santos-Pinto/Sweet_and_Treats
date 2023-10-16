import { PermissionsAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { WEB_CLIENT_ID } from '../../helpers';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export default function Location() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const destinationCoords = {
    latitude: -22.828870998276898,
    longitude: -42.091118816140714,
  };

  const requestLocationPermission = async () => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
      console.log(result);
    });
  };

  useEffect(() => {
    // Obter a localização atual do usuário
    requestLocationPermission();
  }, []);

  return <Container></Container>;
}
