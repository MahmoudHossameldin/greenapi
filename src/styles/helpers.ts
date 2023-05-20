// styles/helpers.js
import { css } from 'styled-components';

export const scrollStyles = css`
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #f0f2f5 #fff;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bebcbc;
    border-radius: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;
