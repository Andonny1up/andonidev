import { useTranslation } from 'react-i18next';

type Props = {}

const Hero = ({}: Props) => {
  const { t } = useTranslation();
  return (
    <section className='py-24 md:py-44'>
        <div className='flex gap-2 mb-4'>
          <img 
            className='w-24 rounded-full'
            src="https://github.com/Andonny1up.png"
            alt="Andoni Barba Noe" 
          />
          <div className='flex items-center '>
            <span
              className='bg-emerald-100 border border-emerald-700 py-1 px-2 rounded-2xl dark:bg-slate-800 dark:text-slate-200'
            >
              {t('hero.available')}
            </span>
          </div>
        </div>
        <div>
          <h1 className='text-5xl font-bold mb-4'>{t('hero.greeting')}</h1>
          <p className='text-xl dark:text-slate-200'>
          {t('hero.description_1')} <span className='text-blue-500 font-semibold dark:text-yellow-400'>{t('hero.role')}</span> 
          {t('hero.description_2')}
          </p>
        </div>
    </section>
  )
}

export default Hero