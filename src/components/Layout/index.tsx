import Head from 'next/head';
import { useRouter } from 'next/router';

import { theme } from '../../../styles/theme';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutWrapper } from './styles';

function Layout({ children }) {
  const site = 'https://';
  const canonicalURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={theme.colors.emerald400} />
        <link rel="canonical" href={canonicalURL} key="canonical" />
      </Head>

      <LayoutWrapper>
        <Header />

        <main>{children}</main>

        <Footer />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
