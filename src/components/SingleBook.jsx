import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

// Lunghezza massima consentita per il titolo
const MAX_TITLE_LENGTH = 18

// Componente per visualizzare un singolo libro
const SingleBook = ({ book, selected, onBookSelect }) => {
  // Tronca il titolo se supera la lunghezza massima
  const truncatedTitle =
    book.title.length > MAX_TITLE_LENGTH ? book.title.slice(0, MAX_TITLE_LENGTH) + '...' : book.title

  // Gestisce il clic su un libro
  const handleClick = React.useCallback(() => {
    onBookSelect(book.asin)
  }, [book.asin, onBookSelect])

  // Classe della copertina del libro in base allo stato di selezione
  const coverClassName = selected
    ? 'object-cover mx-auto w-[100%] h-[200px] border-[10px] border-red-500'
    : 'object-cover mx-auto w-[100%] h-[200px]'

  // Ottengo il tema dal contesto
  const { theme } = useTheme()

  return (
    <figure
      className={`${
        selected ? 'selected' : ''
      } text-center flex flex-col justify-around`}
    >

      {/* Immagine del libro cliccabile */}
      <img
        src={book.img}
        alt={book.title}
        className={`${coverClassName}`}
        onClick={handleClick}
        loading='lazy'
      />

      {/* Titolo del libro troncato */}
      <figcaption
        title={book.title} className={`${
        theme === 'dark' ? 'text-white' : ''
      } flex flex-row`}
      >{truncatedTitle}
      </figcaption>

      <Link className='relative group bg-slate-400 p-2 mt-3 w-full overflow-hidden' to={`/books/${book.asin}`}>
        <div className='absolute inset-0 w-3 bg-slate-300 transition-all duration-[250ms] ease-out group-hover:w-full' />
        <span className='relative text-black'>Vai ai dettagli</span>
      </Link>
    </figure>
  )
}

export default SingleBook
