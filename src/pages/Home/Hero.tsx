import { useTranslation } from 'react-i18next';
import BtnIcon from '../../components/BtnIcon';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className='pb-40 pt-20'>
        <div className='flex items-center gap-4 mb-8'>
          <img 
            className='w-28 h-28 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg transition-transform hover:scale-105'
            src="https://github.com/Andonny1up.png"
            alt="Andoni Barba Noe" 
          />
          <div className='flex items-center'>
            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-800 py-1.5 px-3 rounded-full text-sm font-medium dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300 transition-colors hover:bg-emerald-200/80 dark:hover:bg-emerald-900/50'
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              {t('hero.available')}
            </a>
          </div>
        </div>
        <div className='flex items-center gap-4 my-8'>
          <BtnIcon link="https://linkedin.com/in/tu-perfil" label="LinkedIn"><FaLinkedin size={24} /></BtnIcon>
          <BtnIcon link="https://github.com/Andonny1up" label="GitHub"><FaGithub size={24} /></BtnIcon>
          <BtnIcon link="https://instagram.com/tu-perfil" label="Instagram"><FaInstagram size={24} /></BtnIcon>
        </div>
        <div className='max-w-3xl'>
          <h1 className='text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6'>
            {t('hero.greeting')}
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 dark:text-slate-300 leading-relaxed mb-8'>
          {t('hero.description_1')} <span className='text-blue-500 font-semibold dark:text-yellow-400'>{t('hero.role')}</span> 
          {t('hero.description_2')}
          </p>
          
          <div className='flex flex-wrap gap-4'>
            <a 
              href="mailto:andonibarba@codigosimple.dev" 
              className='inline-flex justify-center items-center px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold rounded-lg hover:scale-105 transition-transform shadow-md'
            >
              {t('hero.contact_me', 'Contáctame')}
            </a>
            <button className='px-6 py-3 border border-gray-300 text-gray-700 dark:border-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors'>
              {t('hero.view_cv', 'Ver CV')}
            </button>
          </div>

          
        </div>
    </section>
  )
}

export default Hero