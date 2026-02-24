import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import Appshell from '@/components/Appshell';
import Navbar from '@/components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Appshell>
      <Navbar />
      <Component {...pageProps} />
      <div>
        footer
      </div>
    </Appshell>
  );
}