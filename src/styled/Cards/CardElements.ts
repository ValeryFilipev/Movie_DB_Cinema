import styled, { keyframes } from 'styled-components';
import Box from '../../components/ui/Layout/Box';
import { getColor, getShadow } from '../../helpers/theme';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CardContainer = styled(Box)`
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${getShadow(5, true)};
  background: ${getColor('common.black')};
  height: 100%;
  a {
    text-decoration: none;
  }

  p {
    cursor: pointer;
  }

  img {
    width: 100%;
    vertical-align: middle;
    animation: ${fadeIn} 2s linear;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  img {
    width: 100%;
    vertical-align: middle;
    animation: ${fadeIn} 2s linear;
  }
`;
