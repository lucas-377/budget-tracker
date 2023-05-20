import styled from 'styled-components';
import NextLink from 'next/link';

export const HeaderContainer = styled.header`
  height: 52px;
  background-color: ${({ theme }) => theme.colors.emerald400};
`;

export const HeaderWrapper = styled.div`
  max-width: 1076px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled(NextLink)`
  color: #fff;
  text-decoration: none;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const HeaderMenuItem = styled.li`
  margin: 0 20px;

  &:first-child {
    margin-left: 0;
  }
`;

export const HeaderMenuLink = styled(NextLink)`
  text-decoration: none;
  color: #fff;
  text-transform: lowercase;
  position: relative;
  display: inline-block;
  transition: all 0.3s;
  opacity: 0.8;

  &::after {
    content: '';
    position: inherit;
    display: block;
    margin: auto;
    height: 3px;
    width: 0;
    top: 14px;
    background: transparent;
    transition: all 0.3s;
  }

  &:hover,
  &.active {
    opacity: 1;

    &::after {
      width: 100%;
      background: #fff;
    }
  }
`;
