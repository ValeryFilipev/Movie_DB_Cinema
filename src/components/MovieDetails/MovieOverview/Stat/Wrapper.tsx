import React from 'react';
import Box from '../../../ui/Layout/Box';

const StatWrapper: React.FunctionComponent = ({ children }) => (
  <Box display='flex' width='auto' mb={{ _: 3, sm: 0 }}>
    {children}
  </Box>
);

export default StatWrapper;
