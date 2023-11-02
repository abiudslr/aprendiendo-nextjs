import './globals.css'
import { Inter as FontSans} from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme.provider';
import { Nav } from '@/components/Nav';

const inter = FontSans({subsets: ['latin'], variable: '--font-sans'})
 
const locales = ['en', 'es'];
 
export default function LocaleLayout({children, params: {locale}} : {children:any, params:any}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
 
  return (
    <html lang={locale} suppressHydrationWarning>
        <head />
        <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <Nav />
            </header>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}