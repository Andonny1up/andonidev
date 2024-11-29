type Props = {}

const Hero = ({}: Props) => {
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
              Disponible para Trabajar
            </span>
          </div>
        </div>
        <div>
          <h1 className='text-5xl font-bold'>Hola, soy Andoni Barba.</h1>
          <p className='text-xl dark:text-slate-200'>
          Licenciado en <span className='text-blue-500 font-semibold dark:text-yellow-400'>Ingeniería de Sistemas y Desarrollador Web</span>, 
          con más de 2 años de experiencia desarrollando páginas web para todo tipo de negocio.
          </p>
        </div>
    </section>
  )
}

export default Hero