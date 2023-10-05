import React from 'react'
import Loader from './Loader'
import { useTheme } from '../contexts/ThemeContext'

const DisplayView = ({ comment, formattedDate, formattedTime, startEditing, isDeleting, deleteComment }) => {
  const { theme } = useTheme()
  return (
    <section>
      {/* Mostra il testo del commento */}
      <p className='max-md:text[.8rem] max-sm:text-[.7rem]'>
        <strong className='text-slate-400'>Commento: </strong>
        {comment.comment}
      </p>
      {/* Mostra la valutazione del commento */}
      <p className='max-md:text[.8rem] max-sm:text-[.7rem]'>
        <strong className='text-slate-400'>Valutazione:</strong> {comment.rate}⭐
      </p>
      {/* Mostra la data e l'ora formattate del commento */}
      <p className='max-md:text[.8rem] max-sm:text-[.7rem]'>
        {formattedDate}, {formattedTime} {}
      </p>
      {/* Sezione dei pulsanti per modificare ed eliminare il commento */}
      <div className='flex flex-row justify-center mt-2 max-md:flex-col max-md:w-full max-md:text-[.7rem] gap-1'>
        {/* Pulsante per avviare la modifica del commento */}
        <button className='relative group overflow-hidden bg-slate-400 p-2 mt-2' onClick={startEditing}>
          <div className={`${
            theme === 'dark' ? 'bg-slate-300' : 'bg-slate-500'
          } absolute inset-0 w-3 transition-all duration-[250ms] ease-out group-hover:w-full`}
          />
          <span className='relative group text-black'>Modifica</span>
        </button>
        {/* Condizionale: se è in corso l'eliminazione, mostra il componente Loader, altrimenti il pulsante Elimina */}
        {isDeleting
          ? (
            <Loader />
            )
          : (
            <button className='relative group overflow-hidden bg-slate-400 p-2 mt-2' onClick={deleteComment}>
              <div className={`${
            theme === 'dark' ? 'bg-slate-300' : 'bg-slate-500'
          } absolute inset-0 w-3 transition-all duration-[250ms] ease-out group-hover:w-full`}
              />
              <span className='relative group text-black'>Elimina</span>
            </button>
            )}
      </div>
    </section>
  )
}

export default DisplayView
