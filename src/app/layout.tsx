import '~/styles/globals.css';
import { Mulish } from 'next/font/google';
import Header from './header';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata = {
  title: 'Daniel "Ludo" DeAnda',
  description:
    "Ludo's home on the internet. Software, music, games, and other lovely things.",
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${mulish.variable}`}>
        <div className="m-auto min-w-[350px] max-w-6xl">
          <Header />
          <main className="flex min-h-screen flex-col justify-center pt-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
