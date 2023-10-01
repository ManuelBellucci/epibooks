import React from 'react'
import Loader from './Loader'

const DisplayView = ({ comment, formattedDate, formattedTime, startEditing, isDeleting, deleteComment }) => (
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
      <button className='mr-2 p-1 border border-black bg-slate-400 hover:bg-slate-300 text-black max-md:mr-0' onClick={startEditing}>
        Modifica
      </button>
      {/* Condizionale: se è in corso l'eliminazione, mostra il componente Loader, altrimenti il pulsante Elimina */}
      {isDeleting
        ? (
          <Loader />
          )
        : (
          <button className='p-1 border border-black bg-slate-400 hover:bg-slate-300 text-black' onClick={deleteComment}>
            Elimina
          </button>
          )}
    </div>
  </section>
)

export default DisplayView
