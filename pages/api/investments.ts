import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { Investment } from '@/src/data/investmentsInterface';
import { investments as initialData } from '@/src/data/investments';

// Path to investments.ts file
const dataFilePath = path.join(process.cwd(), 'src', 'data', 'investments.ts');

// Utility to write updated data back to the investments.ts file
async function writeInvestments(data: Investment[]) {
  const content = `
  import { Investment } from "./investmentsInterface";
  
  export const investments: Investment[] = ${JSON.stringify(data, null, 2)};
  `;

  await fs.writeFile(dataFilePath, content);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let investments: Investment[] = initialData;

    if (req.method === 'GET') {
      return res.status(200).json(investments);
    }

    if (req.method === 'POST') {
      const newInvestment: Investment = req.body;
      investments = [...investments, newInvestment];
      await writeInvestments(investments);
      return res.status(201).json(newInvestment);
    }

    if (req.method === 'PUT') {
        const updatedInvestment: Investment = req.body;
        investments = investments.map((investment) =>
          investment.id === updatedInvestment.id ? updatedInvestment : investment
        );
        await writeInvestments(investments);
        return res.status(200).json(updatedInvestment);
      }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      investments = investments.filter((investment) => investment.id !== Number(id));
      await writeInvestments(investments);
      return res.status(200).json({ success: true });
    }

    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
