import '~/styles/globals.css';
import { Mulish } from 'next/font/google';
import Header from '~/components/header';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata = {
  authors: [
    { name: 'Daniel "Ludo" DeAnda', url: 'https://www.danieldeanda.com' }
  ],
  creator: 'Daniel "Ludo" DeAnda',
  description:
    "Ludo's home on the internet. A place for software, education, music, games, and other lovely things.",
  generator: 'Next.js',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  keywords: [
    'Software Engineering',
    'Portfolio',
    'Developer',
    'Programmer',
    'Computer Science',
    'Front-End',
    'Design',
    'Music',
    'Composition',
    'Arrangement',
    'Composer',
    'Score',
    'A Cappella',
    'Chorus',
    'Games',
    'Video Games',
    'Blog',
    'Mentor',
    'Teacher',
    'Advisor',
    'Instructor'
  ],
  metadataBase: new URL('https://www.danieldeanda.com'),
  openGraph: {
    title: 'Daniel "Ludo" DeAnda',
    description:
      "Ludo's home on the internet. A place for software, education, music, games, and other lovely things.",
    url: 'https://www.danieldeanda.com',
    siteName: 'Daniel "Ludo" DeAnda',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Hello, my name is Daniel "Ludo" DeAnda (Any/All). I enable interaction.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  title: {
    template: '%s | Daniel "Ludo" DeAnda',
    default: 'Daniel "Ludo" DeAnda'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@LudoLogical'
  }
};

export const viewport = {
  themeColor: '#1D232A',
  colorScheme: 'dark'
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
          <main className="flex min-h-screen flex-col justify-center pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
