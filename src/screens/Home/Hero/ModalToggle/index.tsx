import styled from 'styled-components';
import { Dialog } from 'primereact/dialog';

interface IModalToggle {
  $variant?: string;
}
export const ModalToggle = styled.button<IModalToggle>`
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
    font-size: 32px;
  }

  p {
    text-transform: uppercase;
    margin-top: 4px;
  }
`;

export function ExpenseModal(props) {
  return (
    <Dialog header="Adicionar despesa" style={{ width: '50vw' }} {...props}>
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Dialog>
  );
}

export function IncomeModal(props) {
  return (
    <Dialog header="Adicionar receita" style={{ width: '50vw' }} {...props}>
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Dialog>
  );
}
