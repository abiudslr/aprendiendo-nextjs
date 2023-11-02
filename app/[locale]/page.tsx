import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');

  return <div>
    <h1 className='text-center text-cyan-950 dark:text-cyan-50 text-9xl font-bold hover:font-normal'>{t('title')}</h1>
    <Button>{t('button')}</Button>
    <ModeToggle />
  </div>;
}