type Props = {}

const AboutMe = ({}: Props) => {
  return (
    <section>
        <div className="py-40 flex items-center flex-col md:flex-row gap-8 lg:gap-12">
            <div>
                <h1 className='text-center text-5xl font-bold sm:text-start'>
                    ¿Quién es Andoni Barba Noe?
                </h1>
            </div>
            <img 
                className='w-64 p-1 rotate-3 rounded-xl bg-black/20 ring-1 ring-blue-500
                    dark:bg-black/80 dark:ring-yellow-400'
                src="https://github.com/Andonny1up.png"
                alt="Andoni Barba Noe" 
            />
        </div>
    </section>
  )
}

export default AboutMe