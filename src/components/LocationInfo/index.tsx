import React from 'react';
import {
  Container,
  LocationInfoDistance,
  LocationInfoText,
  LocationInfoTime,
  LocationInfoTitle,
} from './styles';

type LocationInfoType = {
  distance: number;
  time: number;
};

const LocationInfo = ({ distance, time }: LocationInfoType) => {
  const formatTime = (time: number) => {
    let hour = Math.round(time / 60);
    let min = Math.floor(time % 60);
    return `${hour} h ${min}`;
  };

  return (
    <Container>
      <LocationInfoTime>
        <LocationInfoTitle>Tempo: </LocationInfoTitle>
        <LocationInfoText>{time < 60 ? Math.ceil(time) : formatTime(time)} min</LocationInfoText>
      </LocationInfoTime>
      <LocationInfoDistance>
        <LocationInfoTitle>Distância: </LocationInfoTitle>
        <LocationInfoText>{distance.toFixed(1)} km</LocationInfoText>
      </LocationInfoDistance>
    </Container>
  );
};

export default LocationInfo;
