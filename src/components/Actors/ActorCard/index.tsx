import React from 'react';

import Box from '../../ui/Layout/Box';
import { Actor } from '../../MovieDetails/types';
import { MOVIE_DB_IMAGE_URL } from '../../../api/movies';
import { Text } from '../../ui/Typography/Text';
import ActorImage from '../../../styled/ActorCard/ActorImage';
import Container from '../../../styled/ActorCard/Container';

const ActorCard: React.FunctionComponent<{ actor: Actor }> = ({ actor }) => (
  <Container>
    <ActorImage src={`${MOVIE_DB_IMAGE_URL.small}${actor.profilePath}`} alt={actor.name} />
    <Box px={2} py={3}>
      <Text color='common.white'>{actor.name}</Text>
      <Text color='common.white' small>
        {actor.character}
      </Text>
    </Box>
  </Container>
);

export default ActorCard;
