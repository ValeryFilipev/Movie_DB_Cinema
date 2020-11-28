import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player/youtube';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import { MOVIE_DB_IMAGE_URL } from '../../api/movies';
import Box from '../ui/Layout/Box';
import Page from '../ui/Layout/Page';
import { H2 } from '../ui/Typography/Heading';
import { MovieDetailsProps } from './types';
import Actors from '../Actors';
import MovieOverview from './MovieOverview';
import OverviewSkeleton from '../Skeleton/OverviewSkeleton';

const MovieDetails: React.FunctionComponent<MovieDetailsProps &
  RouteComponentProps<{ id: string }>> = ({
  addToWatchList,
  fetchMovieDetails,
  removeFromWatchList,
  match,
  movieDetails,
  isInWatchList
}) => {
  useEffect(() => {
    fetchMovieDetails(parseInt(match.params.id));
  }, [match.params.id, fetchMovieDetails]);

  const { movieInfo, actors, images, fetchingMovie, trailers } = movieDetails;
  if (!movieInfo || fetchingMovie) {
    return OverviewSkeleton;
  }

  return (
    <Page backgroundImage={`${MOVIE_DB_IMAGE_URL.large}${movieInfo.backdropPath}`}>
      {console.log(trailers, 'trailers')}
      <MovieOverview
        movieInfo={movieInfo}
        isInWatchList={isInWatchList}
        addToWatchList={addToWatchList}
        removeFromWatchList={removeFromWatchList}
      />
      {actors && <Actors actors={actors} />}
      {images && images.length && (
        <Box bg='rgba(0, 0, 0, 0.5)' mt={7} px={{ _: 0, sm: 2, md: 5 }} py={4}>
          <H2 color='grey.100'>Gallery</H2>
          <ImageGallery
            items={images.map((img) => ({
              original: `${MOVIE_DB_IMAGE_URL.original}${img}`,
              thumbnail: `${MOVIE_DB_IMAGE_URL.small}${img}`
            }))}
          />
        </Box>
      )}
      {
        <Box bg='rgba(0, 0, 0, 0.5)' mt={7} px={{ _: 0, sm: 2, md: 5 }} py={4}>
          <H2 color='grey.100'>Trailers</H2>
          {/*{trailers?.map((item) => (*/}
          {/*  <ReactPlayer*/}
          {/*    key={item.id}*/}
          {/*    url={`https://www.youtube.com/watch?v=${item.key}`}*/}
          {/*    controls*/}
          {/*  />*/}
          {/*))}*/}
          <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
            <div style={{ display: 'inline-block', padding: '1rem' }}>
              <ReactPlayer url={`https://youtu.be/oBHGxGPTsAI`} controls />
            </div>
            <div style={{ display: 'inline-block', padding: '1rem' }}>
              <ReactPlayer url={`https://youtu.be/oBHGxGPTsAI`} controls />
            </div>
            <div style={{ display: 'inline-block', padding: '1rem' }}>
              <ReactPlayer url={`https://youtu.be/oBHGxGPTsAI`} controls />
            </div>
            <div style={{ display: 'inline-block', padding: '1rem' }}>
              <ReactPlayer url={`https://youtu.be/oBHGxGPTsAI`} controls />
            </div>
          </div>
        </Box>
      }
    </Page>
  );
};

export default withRouter(MovieDetails);
