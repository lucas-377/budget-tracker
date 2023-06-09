import Head from 'next/head';
import Hero from './Hero';
import DiffChart from '../../ui/DiffChart';
import Table from './Hero/Table';

export default function Index() {
  return (
    <>
      <Head>
        <title>Realizze</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Table />
      <DiffChart />
    </>
  );
}
