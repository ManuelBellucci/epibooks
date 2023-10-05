import React, { useState } from 'react'
import { AUTH_TOKEN } from '../constants/AUTH_TOKEN'
import { handleSubmit } from '../functions/reviewFunctions'
import { useTheme } from '../contexts/ThemeContext'

const AddComment = React.memo(({ bookAsin, onAddComment }) => {
  // Stati per gestire il testo del commento e la valutazione
  const [commentText, setCommentText] = useState('')
  const [rating, setRating] = useState(1)

  // Gestisce l'invio del commento
  const handleCommentSubmit = () => {
    // Chiama la funzione di invio
    handleSubmit(bookAsin, commentText, rating, onAddComment, AUTH_TOKEN)
    // Resetta lo stato del testo del commento e della valutazione dopo l'invio
    setCommentText('')
    setRating(1)
  }

  const { theme } = useTheme()

  return (
    <section className='mt-3 border-black flex flex-col content-center'>
      <textarea
        className='pt-1 pl-2 text-black mt-2 w-full resize-none placeholder:text-gray-600'
        placeholder='Inserisci una recensione...'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <div className='m-auto p-3 text-center'>
        <label>Quanto ti è piaciuto questo libro?: </label>
        <select className='bg-black text-white w-full' value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((value) => (
            <option
              key={value}
              className='bg-black text-white'
              value={value.toString()}
            >
              {value}⭐
            </option>
          ))}
        </select>
      </div>
      <button className='relative group overflow-hidden bg-slate-400   p-2 mt-2 text-black' onClick={handleCommentSubmit}>
        <div className={`${
          theme === 'dark' ? 'bg-slate-300' : 'bg-slate-500'
        } absolute inset-0 w-3 transition-all duration-[250ms] ease-out group-hover:w-full`}
        />
        <span className='relative group text-black'>Invia recensione</span>
      </button>
    </section>
  )
})

export default AddComment
