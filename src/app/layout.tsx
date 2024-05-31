import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '../../providers/ReactQueryProvider';
import { CounterStoreProvider } from '../../providers/counterStoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js + Zustand + React-query boilerplate',
  description: 'Next.js + Zustand + React-query boilerplate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <CounterStoreProvider>{children}</CounterStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
