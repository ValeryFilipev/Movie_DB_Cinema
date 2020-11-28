import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player/youtube';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import { MOVIE_DB_IMAGE_URL } from '../../api/movies';
import Box from '../ui/Layout/Box';
import Page from '../ui/Layout/Page';
import { H2, H3 } from '../ui/Typography/Heading';
import { MovieDetailsProps } from './types';
import Actors from '../Actors';
import MovieOverview from './MovieOverview';
import OverviewSkeleton from '../Skeleton/OverviewSkeleton';
import PlayerContainer from '../../styled/MovieDetails/PlayerContainer';
import PlayerItem from '../../styled/MovieDetails/PlayerItem';

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
          <PlayerContainer>
            {window.innerWidth < 769 && <H3 color='grey.100'>Rotate device for watching</H3>}
            {trailers?.map((item) => (
              <PlayerItem key={item.id}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${item.key}`} controls />
              </PlayerItem>
            ))}
          </PlayerContainer>
        </Box>
      }
    </Page>
  );
};

export default withRouter(MovieDetails);
