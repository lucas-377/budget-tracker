import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Investment } from '@/src/data/investmentsInterface';

import * as S from '@/styles/shared';

export default function Investments() {
  const [investments, setInvestments] = useState<Investment[]>([]);

  const updatedInvestment = {
    id: 2,
    title: 'Updated Investment Title 2',
    amount: 5000,
    startDate: '2024-12-01',
    endDate: '2024-12-01',
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/investments');
      const data = await res.json();
      setInvestments(data);
    };
    fetchData();
  }, []);

  const addInvestment = async () => {
    await fetch('/api/investments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedInvestment),
    });
  };

  const updateInvestment = async (updatedInvestment: Investment) => {
    try {
      await fetch('/api/investments', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInvestment),
      });
      console.log(
        `Investment with id ${updatedInvestment.id} updated successfully.`,
      );
    } catch (error) {
      console.error(
        `Failed to update investment with id ${updatedInvestment.id}:`,
        error,
      );
    }
  };

  const deleteInvestment = async (id: number) => {
    try {
      await fetch(`/api/investments?id=${id}`, {
        method: 'DELETE',
      });
      console.log(`Investment with id ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete investment with id ${id}:`, error);
    }
  };

  return (
    <>
      <Head>
        <title>Realizze</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="grid">
          <div className="col-12 mt-5">
            <S.Card>
              <div className="grid">
                <div className="col">
                  <S.Title className="mb-2">Investimentos</S.Title>

                  {investments.map(
                    ({ id, title, amount, startDate, endDate }) => (
                      <div key={id}>
                        <div>{title}</div>
                        <div>{amount}</div>
                        <div>{startDate}</div>
                        <div>{endDate}</div>
                        <br />
                      </div>
                    ),
                  )}

                  <button onClick={addInvestment}>Add</button>
                  <button onClick={() => deleteInvestment(4)}>Remove</button>
                  <button onClick={() => updateInvestment(updatedInvestment)}>
                    Update
                  </button>
                </div>
              </div>
            </S.Card>
          </div>
        </div>
      </div>
    </>
  );
}
