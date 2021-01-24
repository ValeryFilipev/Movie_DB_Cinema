import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';

import Box from '../../Layout/Box';
import { Text, TextType } from '../../Typography/Text';
import Label from '../../../../styled/Label';
import StyledInput from '../../../../styled/StyledInput';

interface CustomInputProps {
  noBorder?: boolean;
  unit?: string | React.ReactNode;
  label?: string | React.ReactNode;
  error?: string | React.ReactNode;
  labelColor?: string;
  unitColor?: string;
}

export type InputProps = CustomInputProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  SpaceProps &
  LayoutProps;

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { label, labelColor, unit, unitColor, error, ...rest } = props;
  return (
    <Box display='flex' width='auto'>
      {label && <Label color={labelColor}>{label}</Label>}
      <Box width='auto'>
        <StyledInput {...rest} error={error} />
        {error && (
          <Text mb='0' mt={1} small color='error'>
            {error}
          </Text>
        )}
      </Box>
      {unit && (
        <>
          &nbsp;
          <Text color={unitColor} ml={1} mb={0} type={TextType.LIGHT}>
            {unit}
          </Text>
        </>
      )}
    </Box>
  );
};
