import styled, { StyledProps } from 'styled-components';
import { getColor, getFontSize, getSpace } from '../../helpers/theme';
import { layout, space } from 'styled-system';
import { InputProps } from '../../components/ui/Elements/Input/Input';

const StyledInput = styled.input<StyledProps<InputProps>>`
  background: white;
  border: ${(props) => (props.noBorder ? 'none' : '1px solid')};
  border-color: ${(props) =>
    props.error ? getColor('error')(props) : `${getColor('copyTwo')(props)}51`}; // 0.2 opacity

  border-radius: 4px;
  color: ${getColor('copyOne')};
  font-size: ${getFontSize(2)};
  outline: none;
  padding: ${getSpace(2)} ${getSpace(1)};
  &:focus {
    border-color: ${getColor('primary')};
  }

  &:disabled {
    background: ${getColor('disabled')};
  }

  &::placeholder {
    font-size: ${getFontSize(1)};
  }
  ${space};
  ${layout};
`;

export default StyledInput;
