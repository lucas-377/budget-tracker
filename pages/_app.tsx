// import { locale } from 'primereact/api';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/components/Layout';
import GlobalStyles from '../styles/global';
import { theme } from '../styles/theme';

// Theme
import '../styles/theme.css';
// Icons
import 'primeicons/primeicons.css';
// Core
import 'primereact/resources/primereact.min.css';
// Grid
import 'primeflex/primeflex.css';
// Config
// locale('pt');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
