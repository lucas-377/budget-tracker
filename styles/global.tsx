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
  font-size: 14px;
  scroll-padding-top: 94px;
}

body {
  height: 100%;
  color: ${({ theme }) => theme.colors.gray800};
  background-color: ${({ theme }) => theme.colors.gray050};
  font-family: ${({ theme }) => theme.fonts.text};

  &.overlay {
    overflow-y: hidden;
  }
}

main {
  flex: 1 1 0%;
}

// Scrollbar
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.emerald800};
  border-radius: 2px;
}
::-webkit-scrollbar-track{
  background: ${({ theme }) => theme.colors.gray200};
}

// Text seleciton
::selection {
  color: ${({ theme }) => theme.colors.gray100};
  background: ${({ theme }) => theme.colors.emerald600};
}

.divider-vertical {
  display: inline-block;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray100};
}

.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 24px;
  }
}

hr {
  border-color: ${({ theme }) => theme.colors.gray300};
  border-style: solid;
}
`;
