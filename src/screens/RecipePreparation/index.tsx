import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, VIDEO_HEIGHT, VIDEO_WIDTH, VideoPlayer } from './styles';
import { RecipeCard } from '../../components/RecipeCard';
import getRecipesList from '../../services/DB/getRecipesList';
import YoutubeIframe from 'react-native-youtube-iframe';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootRecipeStackType } from '../../routes/RecipeStack';
import { Loading } from '../../components/Loading';

export default function RecipePreparation() {
  const [videoReady, setVideoReady] = useState(false);

  const route = useRoute<RouteProp<RootRecipeStackType, 'RecipePreparation'>>();

  const video = route.params.video;

  return (
    <Container>
      <VideoPlayer>
        <YoutubeIframe
          videoId={video}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          onReady={() => setVideoReady(true)}
        />
        {!videoReady && <Loading />}
      </VideoPlayer>
    </Container>
  );
}
