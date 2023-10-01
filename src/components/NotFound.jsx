import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const NotFound = () => {
  // Ottengo il tema dal contesto
  const { theme } = useTheme()
  return (
    <section className={`${
        theme === 'dark'
          ? 'text-white bg-slate-800'
          : 'text-slate-800 bg-white'
      }`}
    >
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600'>404</h1>
          <p className='mb-4 text-3xl tracking-tight font-bold  md:text-4xl'>Qualcosa non va</p>
          <p className='mb-4 text-lg font-light'>Scusa, ma la pagina ricercata non esiste. </p>
          <a href='/' className='inline-flex text-white bg-slate-400 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4'>Torna all'Home</a>
        </div>
      </div>
    </section>
  )
}

export default NotFound
