import React from 'react';

import { H2 } from '../ui/Typography/Heading';
import Box from '../ui/Layout/Box';
import { Actor } from '../MovieDetails/types';
import ActorCard from './ActorCard';
import Container from '../../styled/Actors';

const Actors: React.FunctionComponent<{ actors: Actor[] }> = ({ actors }) => (
  <Box bg='rgba(0, 0, 0, 0.5)' mt={7} px={{ _: 2, md: 5 }} py={5}>
    <H2 color='grey.100'>Actors</H2>
    <Container>
      {actors.slice(0, 6).map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </Container>
  </Box>
);

export default Actors;
