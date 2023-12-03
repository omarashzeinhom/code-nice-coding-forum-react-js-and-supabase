import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps & { session: any }) {
  return <Component {...pageProps} />;
}
