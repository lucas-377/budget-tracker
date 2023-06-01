import { Divider } from 'primereact/divider';
import * as S from '../../../../styles/shared';

import AddExpense from './AddExpense';
import AddIncome from './AddIncome';

export default function Hero() {
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
                    <AddExpense />
                  </div>
                  <div className="col">
                    <AddIncome />
                  </div>
                </div>
              </div>
            </div>
          </S.Card>
        </div>
      </div>
    </div>
  );
}
