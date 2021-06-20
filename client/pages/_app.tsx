import type { AppProps } from 'next/app';
import Head from 'next/head';

import './_app.css';

import GlobalStyle from '@components/common/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Learn & Grow</title>
        <link rel='icon' href='/svg/aquifera-logo.svg' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
