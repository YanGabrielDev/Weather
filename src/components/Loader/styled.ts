import { styled, css } from "styled-components";

export const Loading = styled.span`
${({theme}) =>css`
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

  &::after,
  &::before {
    content: '';  
    box-sizing: border-box;
    width: 152px;
    height: 152px;
    border-radius: 50%;
    border: 8px solid ${theme.colors.text};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }
  
  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`}
`