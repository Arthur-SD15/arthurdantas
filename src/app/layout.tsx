import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { AppDataProvider } from './context/DataContext';
import 'flag-icon-css/css/flag-icons.min.css';
import DataProviders from './providers/DataProviders';
import CustomHead from './head';
import Navbar from '../components/Header';
import Footer from '../components/[locale]/Footer';
import '../../lib/i18n';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <CustomHead />
      <AppDataProvider>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <DataProviders>
            <body className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidde`}>          
              <Navbar />
              
              {children} 
              <Footer />
            </body>
          </DataProviders>
        </ThemeProvider>
      </AppDataProvider>
    </html>
  )
}
