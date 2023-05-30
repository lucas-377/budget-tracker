import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 6px 16px;
`;

export const SmallTitle = styled.p`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.gray600};
  font-weight: 600;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const DescriptionTitle = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: 500;
`;

interface IAmoutText {
  $variant?: string;
}
export const AmountText = styled.h3<IAmoutText>`
  font-size: 24px;
  color: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.$variant === 'expense'
      ? ({ theme }) => theme.colors.red500
      : props.$variant === 'income'
      ? ({ theme }) => theme.colors.green500
      : ({ theme }) => theme.colors.gray800};
`;
