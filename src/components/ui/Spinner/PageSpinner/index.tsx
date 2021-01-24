import React from 'react';

import Box from '../../Layout/Box';
import Spinner from '../index';

const PageSpinner: React.FunctionComponent = () => (
  <Box display='flex' mt='25%' justifyContent='center'>
    <Spinner size='96px' />
  </Box>
);

export default PageSpinner;
