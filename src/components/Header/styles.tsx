import styled from 'styled-components';

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

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const Avatar = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 16px;
  overflow: hidden;
`;
