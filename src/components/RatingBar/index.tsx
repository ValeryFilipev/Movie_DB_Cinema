import React from 'react';

import Box from '../ui/Layout/Box';
import Svg from '../../styled/RatingBar/Svg';
import CircleBackground from '../../styled/RatingBar/CircleBackground';
import Circle from '../../styled/RatingBar/Circle';
import RatingText from '../../styled/RatingBar/RatingText';

const RatingBar: React.FunctionComponent<{ rating: number }> = ({ rating }) => {
  if (rating <= 0 || rating > 10) {
    return null;
  }

  const percentage = Math.floor(rating * 10);

  return (
    <Box position='relative' width='auto'>
      <Svg viewBox='0 0 36 36'>
        <CircleBackground
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <Circle
          rating={percentage}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
      </Svg>
      <RatingText>{rating}</RatingText>
    </Box>
  );
};

export default RatingBar;
