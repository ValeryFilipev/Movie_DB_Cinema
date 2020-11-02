import React from 'react';
import { StyledProps, StyledComponent, DefaultTheme } from 'styled-components';
import { SpaceProps, LayoutProps } from 'styled-system';

import { ButtonBaseProps } from './ButtonBase';
import { ButtonType, ButtonVariant } from './types';
import Spinner from '../../Spinner';
import { BlockButton } from '../../../../styled/Buttons/BlockButton';
import { OutlinedButton } from '../../../../styled/Buttons/OutlinedButton';
import SpinnerContainer from '../../../../styled/SpinnerText';

interface CustomProps {
  variant?: ButtonVariant;
  buttonType?: ButtonType;
  loading?: boolean;
}

export type ButtonProps = ButtonBaseProps & CustomProps & SpaceProps & LayoutProps;
export type StyledButtonProps = StyledProps<ButtonProps>;

const Button: React.FunctionComponent<ButtonProps> = ({
  buttonType = 'block',
  loading,
  children,
  ...rest
}) => {
  const Component: StyledComponent<'button', DefaultTheme, ButtonProps> =
    buttonType === 'block' ? BlockButton : OutlinedButton;

  const spinnerColor =
    buttonType === 'outlined' ? `${rest.variant}.main` : `${rest.variant}.contrastText`;

  return (
    <Component {...rest}>
      {loading && (
        <SpinnerContainer>
          <Spinner size='24px' thickness='4px' color={spinnerColor} />
        </SpinnerContainer>
      )}
      {children}
    </Component>
  );
};

export default Button;
