/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from 'primereact/inputnumber';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

import * as S from '../../../../../styles/shared';
import { Button } from '../Button';
import Modal from '../../../../ui/Modal';

interface ISource {
  name: string;
  code: string;
}

export default function AddIncome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<number>(null);
  const [selectedSource, setSelectedSource] = useState<ISource | null>(null);
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [description, setDescription] = useState<string>('');

  const sources: ISource[] = [
    { name: 'Salário', code: 'NY' },
    { name: 'Investimentos', code: 'RM' },
    { name: 'Freelance', code: 'LDN' },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Card className="text-center">
        <Button $variant="income" onClick={handleOpenModal}>
          <i className="pi pi-plus-circle" />
          <p>receita</p>
        </Button>
      </S.Card>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSubmitModal}
        title="Nova receita"
        content={
          <form className="flex flex-column gap-3 mt-3">
            <span className="p-float-label">
              <InputText
                id="income-name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                className="w-full"
              />
              <label htmlFor="income-name">Nome</label>
            </span>

            <span className="p-float-label">
              <InputNumber
                id="income-amount"
                value={amount}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setAmount(e.value)
                }
                mode="currency"
                currency="BRL"
                locale="pt-BR"
                className="w-full"
              />
              <label htmlFor="income-amount">Valor</label>
            </span>

            <span className="p-float-label">
              <Dropdown
                id="income-source"
                value={selectedSource}
                onChange={(e: DropdownChangeEvent) =>
                  setSelectedSource(e.value)
                }
                options={sources}
                optionLabel="name"
                showClear
                className="w-full"
              />
              <label htmlFor="income-source">Selecione a fonte</label>
            </span>

            <span className="p-float-label">
              <Calendar
                id="income-date"
                value={date}
                onChange={(e: CalendarChangeEvent) => setDate(e.value)}
                dateFormat="dd/mm/yy"
                className="w-full"
              />
              <label htmlFor="income-date">Selecione a data</label>
            </span>

            <span className="p-float-label">
              <InputTextarea
                id="income-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                cols={30}
                className="w-full"
              />
              <label htmlFor="income-description">
                Adicione uma descrição (opcional)
              </label>
            </span>
          </form>
        }
      />
    </>
  );
}
