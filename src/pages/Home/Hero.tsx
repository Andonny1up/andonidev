import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='py-44'>
        <div>
            <img 
              className='w-24 rounded-full'
              src="https://github.com/Andonny1up.png"
              alt="Andoni Barba Noe" 
            />
        </div>
        <div>
          <h1>Hola, soy Andoni Barba Noe.</h1>
        </div>
    </section>
  )
}

export default Hero