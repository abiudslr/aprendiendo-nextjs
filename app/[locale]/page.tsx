import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');

  return <h1 className='text-center text-cyan-50 text-9xl font-bold hover:font-normal'>{t('title')}</h1>;
}