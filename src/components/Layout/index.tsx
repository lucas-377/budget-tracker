import Head from 'next/head';
import { useRouter } from 'next/router';

import { theme } from '../../../styles/theme';

function Layout({ children }) {
  const site = 'https://';
  const canonicalURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={theme.colors.primary} />
        <link rel="canonical" href={canonicalURL} key="canonical" />
      </Head>

      <main>{children}</main>
    </>
  );
}

export default Layout;
