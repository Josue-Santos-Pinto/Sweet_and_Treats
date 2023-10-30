import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const VIDEO_HEIGHT = 240;
export const VIDEO_WIDTH = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
`;
export const VideoPlayer = styled.View`
  width: 100%;
  height: ${VIDEO_HEIGHT}px;
`;
