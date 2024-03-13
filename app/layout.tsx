import './globals.css';
import classNames from 'classnames';
import { ibmPlexSerif } from './fonts';

export const metadata = {
  title: 'NextTails',
  description: 'A Next.js cocktail recipe library',
  themeColor: '#FFF',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={ibmPlexSerif.className}>
        <div className='fixed h-screen w-full bg-white' />

        <main className='flex min-h-screen w-full flex-col items-center pt-8'>
          {children}
        </main>
      </body>
    </html>
  );
}
