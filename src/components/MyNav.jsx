import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

export default function MyNav ({ query, setQuery }) {
  // Gestisce il cambio del valore nella barra di ricerca
  const handleSearchChange = (event) => {
    const newValue = event.target.value
    setQuery(newValue)
  }

  // Ottengo il tema dal contesto
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={`fixed top-0 z-10 w-full p-5 border-solid border-b-2 border-black max-sm:flex max-sm:flex-col ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-300'} `}>
      <header className='md:flex justify-between items-center w-full md:w-auto md:order-1 max-md:flex'>
        {/* Lista di navigazione */}
        <ul className='flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium max-md:hidden '>

          {/* Home */}
          <li className={`px-5 ${theme === 'dark' ? 'text-white' : ''}`}>
            <a
              href='/'
              className={`${
                theme === 'dark'
                  ? 'text-white hover:bg-gray-50 hover:text-slate-400 border-b border-gray-100 md:border-0 block pl-3 pr-4 py-2 md:p-2 rounded'
                  : 'bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-2 rounded'
              }`}
              aria-current='page'
            >
              Home
            </a>
          </li>

          {/* About */}
          <li className={`px-5 ${theme === 'dark' ? 'text-white' : ''}`}>
            <a
              href='/'
              className={`${
                theme === 'dark'
                  ? 'text-white hover:bg-gray-50 hover:text-slate-400 border-b border-gray-100 md:border-0 block pl-3 pr-4 py-2 md:p-2 rounded'
                  : 'text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-2'
              }`}
            >
              About
            </a>
          </li>

          {/* Browse */}
          <li className={`px-5 ${theme === 'dark' ? 'text-white' : ''}`}>
            <a
              href='/'
              className={`${
                theme === 'dark'
                  ? 'text-white hover:bg-gray-50 hover:text-slate-400 border-b border-gray-100 md:border-0 block pl-3 pr-4 py-2 md:p-2 rounded'
                  : 'text-gray-700 border-b border-gray-100 md:hover-bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-2'
              }`}
            >
              Browse
            </a>
          </li>
        </ul>

        {/* Input controllato per la barra di ricerca */}
        <input
          type='text'
          placeholder='Search books...'
          value={query}
          onChange={handleSearchChange}
          className='border border-gray-950 rounded p-3 mx-auto w-64 text-black flex'
        />

        {/* Componente Toggle per il cambio di tema */}
        <ThemeToggle onClick={toggleTheme} />
      </header>
    </nav>
  )
}
