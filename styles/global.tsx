import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export default createGlobalStyle<Theme>`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#__next {
  height: 100%;
}

html {
  height: 100%;
  font-size: 62.5%; /* 10px = 1rem */
  scroll-padding-top: 94px;
}

body {
  height: 100%;
  font-size: 1.6rem; // 16px
  color: ${({ theme }) => theme.colors.gray800};
  background-color: #fff;
  font-family: ${({ theme }) => theme.fonts.text};

  &.overlay {
    overflow-y: hidden;
  }
}

main {
  flex: 1 1 0%;
}

input[type=checkbox] {
  accent-color: ${({ theme }) => theme.colors.emerald400};
  width: 20px;
  height: 20px;
}

// Scrollbar
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.emerald600};
  border-radius: 2px;
}
::-webkit-scrollbar-track{
  background: ${({ theme }) => theme.colors.gray100};
}

// Text seleciton
::selection {
  color: ${({ theme }) => theme.colors.gray100};
  background: ${({ theme }) => theme.colors.emerald600};
}

img {
  width: 100%;
  max-width: 100%;
}

button {
  cursor: pointer;
}

.divider-vertical {
  display: inline-block;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray100};
}

.container {
  max-width: 1276px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 24px;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

`;
