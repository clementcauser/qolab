import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to qolab!</title>
      </Head>
      <main className="app">
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </main>
    </>
  );
}

export default CustomApp;
