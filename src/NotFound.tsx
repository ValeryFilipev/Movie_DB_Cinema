import React from 'react';
import { Link } from 'react-router-dom';

import { Text } from './components/ui/Typography/Text';
import Button from './components/ui/Elements/Button/Buttons';
import PageBackgroundImage from './styled/PageBackgroundImage';
import Box from './components/ui/Layout/Box';
import NotFoundContent from './styled/NotFound/NotFoundContent';
import NotFoundFade from './styled/NotFound/NotFoundFade';

const NotFound: React.FunctionComponent = () => (
  <Box position='relative' height='100%'>
    <PageBackgroundImage src='https://i2.wp.com/metro.co.uk/wp-content/uploads/2015/12/john-travolta1.jpg' />
    <NotFoundFade />
    <NotFoundContent>
      <Text color='common.white' fontSize={6} mb={5}>
        404
      </Text>
      <Text color='common.white'>There is nothing here</Text>
      <Link to='/'>
        <Button variant='primary' buttonType='outlined'>
          Return to homepage
        </Button>
      </Link>
    </NotFoundContent>
  </Box>
);

export default NotFound;
