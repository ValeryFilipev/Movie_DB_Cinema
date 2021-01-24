import React from 'react';
import { FormattedDate, FormattedNumber } from 'react-intl';
import FormattedDuration from 'react-intl-formatted-duration';

import StatWrapper from '../Stat/Wrapper';
import Icon from '../../../../styled/MovieOverview/Icon';
import StatText from '../Stat/Text';
import Box from '../../../ui/Layout/Box';
import { MovieInfo } from '../../types';

interface Props {
  movieInfo: MovieInfo;
}

const DetailsPanel: React.FunctionComponent<Props> = ({ movieInfo }) => (
  <Box
    bg='common.black'
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    flexDirection={{ _: 'column', sm: 'row' }}
    gridArea='stats'
    px={3}
    py={4}
  >
    <StatWrapper>
      <Icon className='material-icons'>date_range</Icon>
      <StatText>
        Release date:&nbsp;&nbsp;
        <FormattedDate
          value={new Date(movieInfo.releaseDate)}
          year='numeric'
          month='long'
          day='2-digit'
        />
      </StatText>
    </StatWrapper>
    <StatWrapper>
      <Icon className='material-icons'>timer</Icon>
      <StatText>
        <FormattedDuration seconds={movieInfo.runtime * 60} format='{hours} {minutes}' />
      </StatText>
    </StatWrapper>
    <StatWrapper>
      <Icon className='material-icons'>attach_money</Icon>
      <StatText>
        Budget:&nbsp;&nbsp;
        <FormattedNumber
          value={movieInfo.budget}
          // eslint-disable-next-line
          style='currency'
          currency='USD'
          maximumFractionDigits={2}
        />
      </StatText>
    </StatWrapper>
  </Box>
);

export default DetailsPanel;
