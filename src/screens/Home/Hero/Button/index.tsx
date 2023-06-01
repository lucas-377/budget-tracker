import styled from 'styled-components';

interface IButton {
  $variant?: string;
}
export const Button = styled.button<IButton>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.$variant === 'expense'
      ? ({ theme }) => theme.colors.red500
      : props.$variant === 'income'
      ? ({ theme }) => theme.colors.green500
      : ({ theme }) => theme.colors.gray800};

  i {
    font-size: 2.286rem; // 32px
  }

  p {
    text-transform: uppercase;
    margin-top: 4px;
  }
`;
