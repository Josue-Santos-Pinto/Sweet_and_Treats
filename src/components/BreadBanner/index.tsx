import { View, Text } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import {
  BreadBG,
  BreadBannerFlexCenter,
  BreadBannerInfo,
  BreadBannerTime,
  Container,
  Shadow,
} from './styles';

function BreadBanner() {
  const targetTime = new Date();
  targetTime.setHours(17, 0, 0, 0);

  const [timeRemaining, setTimeRemaining] = useState<number>(
    Math.max(targetTime.getTime() - new Date().getTime(), 0)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1000);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining]);

  let canStartTime = timeRemaining > 0 && timeRemaining <= 600000;

  const formatTime = (milliseconds: number): string => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Container>
      <BreadBG source={require('../../assets/images/bread.jpg')} resizeMode="cover">
        <Shadow>
          <BreadBannerFlexCenter>
            <BreadBannerInfo>
              {`Pão saindo do forno \n${canStartTime ? 'em' : 'às'}`}{' '}
            </BreadBannerInfo>
          </BreadBannerFlexCenter>
          <BreadBannerFlexCenter>
            <BreadBannerTime>{canStartTime ? formatTime(timeRemaining) : '17:00'}</BreadBannerTime>
          </BreadBannerFlexCenter>
        </Shadow>
      </BreadBG>
    </Container>
  );
}

export default BreadBanner;
