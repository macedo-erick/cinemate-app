import './globals.scss';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import { LastQueriesProvider } from '@/utils/context/LastQueriesContext';
import { PageProvider } from '@/utils/context/PageContext';
import { QueryProvider } from '@/utils/context/QueryContext';

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
          <QueryProvider>
            <LastQueriesProvider>
              <PageProvider>{children}</PageProvider>
            </LastQueriesProvider>
          </QueryProvider>
        </main>
      </body>
    </html>
  );
}
