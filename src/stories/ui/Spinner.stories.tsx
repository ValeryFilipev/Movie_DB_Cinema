import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../../components/ui/Layout/Box';
import Spinner from '../../components/ui/Spinner';

// eslint-disable-next-line no-undef
storiesOf('Spinner', module)
  .add('Default spinner', () => (
    <Box bg='secondary.main' p={4}>
      <Spinner />
    </Box>
  ))
  .add('Colorful', () => <Spinner color='primary.main' />)
  .add('Custom size', () => <Spinner color='brandYellow' size='128px' />);
