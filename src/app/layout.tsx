import '~/styles/globals.css';

import { Mulish } from 'next/font/google';

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
      <body className={`font-sans ${mulish.variable}`}>{children}</body>
    </html>
  );
}
