import React from 'react';
import { Text } from '../../../ui/Typography/Text';

const StatText: React.FunctionComponent = ({ children }) => (
  <Text color='grey.300' ml={3} mb={0}>
    {children}
  </Text>
);

export default StatText;
