import './globals.scss';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import { LastQueriesProvider } from '@/context/LastQueriesContext';
import { PageProvider } from '@/context/PageContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Cinemate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header></Header>
        <main className="bg-slate-800 flex min-h-screen flex-col px-12 pt-32">
          <PageProvider>
            <LastQueriesProvider>{children}</LastQueriesProvider>
          </PageProvider>
        </main>
      </body>
    </html>
  );
}
