import './globals.scss';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';

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
          {children}
        </main>
        {/*<Footer></Footer>*/}
      </body>
    </html>
  );
}
