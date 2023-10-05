import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const EditingView = ({ editedComment, setEditedComment, editedRating, setEditedRating, saveChanges, cancelEditing }) => {
  const { theme } = useTheme()
  return (
    <section className='flex flex-col'>
      {/* Textarea per modificare il testo del commento */}
      <textarea value={editedComment} onChange={(e) => setEditedComment(e.target.value)} className='text-black' />

      {/* Sezione per modificare la valutazione del commento */}
      <div className='flex flex-row mt-2 justify-center max-sm:flex-col max-[890px]:flex-col max-[890px]:gap-1'>

        {/* Selettore per la valutazione */}
        <select value={editedRating} onChange={(e) => setEditedRating(e.target.value)} className='bg-black text-white mr-2 flex flex-grow max-[890px]:mr-0'>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value.toString()}>
              {value}⭐
            </option>
          ))}
        </select>

        {/* Pulsante per salvare le modifiche */}
        <button className='relative group overflow-hidden bg-slate-400 p-2 mr-3 max-[890px]:mr-0' onClick={saveChanges}>
          <div className={`${
            theme === 'dark' ? 'bg-slate-300' : 'bg-slate-500'
          } absolute inset-0 w-3 transition-all duration-[250ms] ease-out group-hover:w-full`}
          />
          <span className='relative group text-black'>Salva</span>
        </button>

        {/* Pulsante per annullare le modifiche */}
        <button className='relative group overflow-hidden bg-slate-400 p-2' onClick={cancelEditing}>
          <div className={`${
            theme === 'dark' ? 'bg-slate-300' : 'bg-slate-500'
          } absolute inset-0 w-3 transition-all duration-[250ms] ease-out group-hover:w-full`}
          />
          <span className='relative group text-black'>Annulla</span>
        </button>
      </div>
    </section>
  )
}

export default EditingView
