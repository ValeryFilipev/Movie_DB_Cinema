import styled, { css, FlattenInterpolation } from 'styled-components';
import { getColor } from '../../helpers/theme';
import { StyledButtonProps } from '../../components/ui/Elements/Button/Buttons';
import ButtonBase from '../../components/ui/Elements/Button/ButtonBase';
import { layout, space } from 'styled-system';
import { Ripple } from '../Ripple';

const getOutlineVariantStyle = (
  props: StyledButtonProps
): FlattenInterpolation<StyledButtonProps> | string => {
  const { variant } = props;
  if (!props.variant) {
    return '';
  }

  return css<StyledButtonProps>`
    border-color: ${getColor(`${variant}.main`)}3A;
    color: ${getColor(`${variant}.main`)};
    &:hover:enabled {
      background-color: ${getColor(`${variant}.main`)}14;
      @media (hover: none) {
        background-color: transparent;
      }
    }
  `;
};

export const OutlinedButton = styled.button<StyledButtonProps>`
  ${ButtonBase};
  ${Ripple};
  border: 1px solid ${getColor('black')}3A; /* 0.23 opacity */
  background-color: transparent;
  &:hover:enabled {
    background-color: ${getColor('black')}14; /* 0.08 opacity */
    @media (hover: none) {
      background-color: transparent;
    }
  }
  &:disabled {
    color: ${getColor('action.disabled')};
    border: 1px solid ${getColor('action.disabled')};
  }
  ${getOutlineVariantStyle};
  ${space};
  ${layout};
`;
