import './globals.css'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({subsets: ['latin']})
 
const locales = ['en', 'es'];
 
export default function LocaleLayout({children, params: {locale}} : {children:any, params:any}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
 
  return (
    <html lang={locale}>
      <body className={"bg-zinc-800"}>{children}</body>
    </html>
  );
}