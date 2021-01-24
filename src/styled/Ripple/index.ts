import { css, keyframes } from 'styled-components';

const rippleKeyFrame = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: .5;
  }
  100% {
    width: 200%;
    height: 400%;
    opacity: 0;
  }
`;

export const Ripple = css`
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: currentColor;
    visibility: hidden;
    z-index: 2;
  }

  &:not(:active):before {
    animation: ${rippleKeyFrame} 0.8s cubic-bezier(0, 0, 0.2, 1);
    transition: visibility 0.8s step-end;
  }

  &:active:before {
    visibility: visible;
  }
`;
