import React from 'react';
import { Link } from 'react-router-dom';

import { MOVIE_DB_IMAGE_URL } from '../../api/movies';
import Button from '../ui/Elements/Button/Buttons';
import Box from '../ui/Layout/Box';
import { Text } from '../ui/Typography/Text';
import { WatchListItem } from '../Movies/types';
import { MovieImage } from './CardElements';
import { CardContainer } from '../../styled/Cards/CardElements';

interface Props {
  item: WatchListItem;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const WatchListCard: React.FunctionComponent<Props> = ({ item, onClick }) => {
  return (
    <CardContainer>
      <Link to={`/movie/${item.id}`}>
        <MovieImage src={`${MOVIE_DB_IMAGE_URL.medium}${item.posterPath}`} alt={item.title} />
        <Box bg='common.black' px={2} py={3}>
          <Text color='common.white' mr={7}>
            {item.title}
          </Text>
          <Button onClick={onClick} variant='secondary' name={item.id.toString()}>
            Remove
          </Button>
        </Box>
      </Link>
    </CardContainer>
  );
};

export default WatchListCard;
