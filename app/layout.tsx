'use client';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { DataContextProvider } from './context/DataContextProvider';
import TranslationProvider from './providers/TranslationProvider';
import Navbar from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import 'src/styles/index.css';
import 'lib/i18n';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="keywords" content="arthur dantas, portfolio, full stack, desenvolvedor, dev, engenheiro de software, nextjs portfolio, typescript portfolio, portfolio website" />
        <meta property="og:site_name" content="Portfolio | Arthur Dantas" />
        <meta property="og:title" content="Portfolio | Arthur Dantas - Engenheiro de Software" />
        <meta property="og:description" content="Arthur Dantas, desenvolvedor de software full stack, com experiência na criação de aplicações web, construindo soluções modernas, eficientes e escaláveis." />
        <meta name="description" content="Portfolio de Arthur Dantas, Engenheiro de Software Full Stack especialista em desenvolvimento web e soluções inovadoras." />
        <meta property="og:type" content="website" />
        <meta name="author" content="Arthur Dantas" />
        <meta name="content-language" content="pt" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arthurdantas.com/" />
        <meta name="application-name" content="Portfolio | Arthur Dantas - Engenheiro de Software Full Stack" />
        <meta name="apple-mobile-web-app-title" content="Portfolio | Arthur Dantas - Engenheiro de Software Full Stack" />
        <title>Portfolio | Arthur Dantas - Engenheiro de Software Full Stack</title>
      </head>
      <body
        className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}
      >
        <DataContextProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TranslationProvider>
              <LayoutContent>{children}</LayoutContent>
            </TranslationProvider>
          </ThemeProvider>
        </DataContextProvider>
      </body>
    </html>
  );
}
