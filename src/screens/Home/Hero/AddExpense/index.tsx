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

interface ICategory {
  name: string;
  code: string;
}

export default function AddExpense() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<number>(null);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  );
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [description, setDescription] = useState<string>('');

  const categories: ICategory[] = [
    { name: 'Pet', code: 'NY' },
    { name: 'Mercado', code: 'RM' },
    { name: 'Casa', code: 'LDN' },
    { name: 'Saúde', code: 'IST' },
    { name: 'Investimento', code: 'PRS' },
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
        <Button $variant="expense" onClick={handleOpenModal}>
          <i className="pi pi-minus-circle" />
          <p>despesa</p>
        </Button>
      </S.Card>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSubmitModal}
        title="Nova despesa"
        content={
          <form className="flex flex-column gap-3 mt-3">
            <span className="p-float-label">
              <InputText
                id="expense-name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                className="w-full"
              />
              <label htmlFor="expense-name">Nome</label>
            </span>

            <span className="p-float-label">
              <InputNumber
                id="expense-amount"
                value={amount}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setAmount(e.value)
                }
                mode="currency"
                currency="BRL"
                locale="pt-BR"
                className="w-full"
              />
              <label htmlFor="expense-amount">Valor</label>
            </span>

            <span className="p-float-label">
              <Dropdown
                id="expense-category"
                value={selectedCategory}
                onChange={(e: DropdownChangeEvent) =>
                  setSelectedCategory(e.value)
                }
                options={categories}
                optionLabel="name"
                showClear
                className="w-full"
              />
              <label htmlFor="expense-category">Selecione a categoria</label>
            </span>

            <span className="p-float-label">
              <Calendar
                id="expense-date"
                value={date}
                onChange={(e: CalendarChangeEvent) => setDate(e.value)}
                dateFormat="dd/mm/yy"
                className="w-full"
              />
              <label htmlFor="expense-date">Selecione a data</label>
            </span>

            <span className="p-float-label">
              <InputTextarea
                id="expense-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                cols={30}
                className="w-full"
              />
              <label htmlFor="expense-description">
                Adicione uma descrição (opcional)
              </label>
            </span>
          </form>
        }
      />
    </>
  );
}
