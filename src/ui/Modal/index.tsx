import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import styled from 'styled-components';

// Styled components
const ModalWrapper = styled.div``;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
  content: React.ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave,
  title,
  content,
}) => (
  <ModalWrapper>
    <Dialog
      visible={isOpen}
      onHide={onClose}
      header={title}
      footer={
        <div>
          <Button
            label="Cancelar"
            onClick={onClose}
            className="p-button-secondary"
          />
          <Button label="Salvar" onClick={onSave} />
        </div>
      }
    >
      {content}
    </Dialog>
  </ModalWrapper>
);

export default Modal;
