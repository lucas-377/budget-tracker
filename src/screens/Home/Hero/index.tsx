import { Divider } from 'primereact/divider';
import { useState } from 'react';
import * as S from '../../../../styles/shared';
import { ExpenseModal, IncomeModal, ModalToggle } from './ModalToggle';

export default function Hero() {
  const [expenseModal, setExpenseModal] = useState<boolean>(false);
  const [incomeModal, setIncomeModal] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="grid">
        <div className="col-12 mt-5">
          <S.Card>
            <div className="grid">
              <div className="col">
                <S.SmallTitle>Bem-vindo,</S.SmallTitle>
                <S.Title className="mb-2">Lucas Santana!</S.Title>

                <div className="grid">
                  <div className="col">
                    <S.Card>
                      <S.DescriptionTitle>receita mensal</S.DescriptionTitle>
                      <S.AmountText $variant="income">+ R$ 800,00</S.AmountText>
                    </S.Card>
                  </div>
                  <div className="col">
                    <S.Card>
                      <S.DescriptionTitle>despesa mensal</S.DescriptionTitle>
                      <S.AmountText $variant="expense">
                        + R$ 800,00
                      </S.AmountText>
                    </S.Card>
                  </div>
                </div>
              </div>

              <Divider layout="vertical" />

              <div className="col">
                <S.SmallTitle>saldo geral</S.SmallTitle>
                <S.Title className="mb-2">
                  <S.DescriptionTitle>R$</S.DescriptionTitle> 100.000,00
                </S.Title>

                <div className="grid">
                  <div className="col">
                    <S.Card className="text-center">
                      <ModalToggle
                        $variant="expense"
                        onClick={() => setExpenseModal(true)}
                      >
                        <i className="pi pi-minus-circle" />
                        <p>despesa</p>
                      </ModalToggle>
                    </S.Card>
                  </div>
                  <div className="col">
                    <S.Card className="text-center">
                      <ModalToggle
                        $variant="income"
                        onClick={() => setIncomeModal(true)}
                      >
                        <i className="pi pi-plus-circle" />
                        <p>receita</p>
                      </ModalToggle>
                    </S.Card>
                  </div>
                </div>
              </div>
            </div>
          </S.Card>
        </div>
      </div>

      <ExpenseModal
        visible={expenseModal}
        onHide={() => setExpenseModal(false)}
      />
      <IncomeModal visible={incomeModal} onHide={() => setIncomeModal(false)} />
    </div>
  );
}
