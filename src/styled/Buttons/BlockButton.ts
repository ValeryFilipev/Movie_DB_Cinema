import styled, { css, FlattenInterpolation } from 'styled-components';
import { getColor, getShadow } from '../../helpers/theme';
import { StyledButtonProps } from '../../components/ui/Elements/Button/Buttons';
import ButtonBase from '../../components/ui/Elements/Button/ButtonBase';
import { layout, space } from 'styled-system';
import { Ripple } from '../Ripple';

const getBlockVariantStyle = (
  props: StyledButtonProps
): FlattenInterpolation<StyledButtonProps> | string => {
  const { variant } = props;
  if (!props.variant) {
    return '';
  }

  return css<StyledButtonProps>`
    color: ${getColor(`${variant}.contrastText`)};
    background-color: ${getColor(`${variant}.main`)};
    &:hover:enabled {
      background-color: ${getColor(`${variant}.dark`)};
      @media (hover: none) {
        background-color: ${getColor(`${variant}.main`)};
      }
    }

    &:disabled {
      color: ${getColor(`${variant}.contrastText`)}B0;
      box-shadow: ${getShadow(0)};
      background-color: ${getColor(`${variant}.main`)}B0;
    }
  `;
};

export const BlockButton = styled.button<StyledButtonProps>`
  ${ButtonBase};
  ${Ripple};
  color: ${getColor('copy.primary')};
  background-color: ${getColor('grey.300')};
  box-shadow: ${getShadow(2)};
  &:hover:enabled {
    background-color: ${getColor('grey.A100')};
    box-shadow: ${getShadow(4)};
    @media (hover: none) {
      box-shadow: ${getShadow(2)};
      background-color: ${getColor('grey.300')};
    }
  }

  &:active {
    box-shadow: ${getShadow(8)};
  }

  &:disabled {
    color: ${getColor('action.disabled')};
    box-shadow: ${getShadow(0)};
    background-color: ${getColor('action.disabledBackground')};
  }

  ${getBlockVariantStyle};
  ${space};
  ${layout};
`;
