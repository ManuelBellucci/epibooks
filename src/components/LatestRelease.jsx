import React, { useEffect, useState } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import Pagination from './Pagination'
import { useTheme } from '../contexts/ThemeContext'
import { GRADIENT_CLASSNAME } from '../constants/GRADIENT_CLASSNAME'
import { useBookData } from '../hooks/useBookData'

const LatestRelease = ({ query }) => {
  // Utilizza il hook custom per ottenere i dati dei libri e le opzioni di paginazione
  const { currentBooks, paginationOptions, handleBookSelect, selectedBook } = useBookData(query)
  const { theme } = useTheme()

  // State to manage loading state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Assuming useBookData fetches data asynchronously
    // Set loading to false once data is fetched
    setLoading(false)
  }, [currentBooks]) // You might need to adjust the dependency array based on your useBookData implementation

  return (
    <section className={`${theme === 'dark' ? 'bg-slate-800' : ''} flex flex-row`}>
      {/* Sezione principale contenente i libri più recenti */}
      <section className='w-3/4 p-3'>
        {/* Titolo della sezione con effetto di gradiente */}
        <h2 id='latestRelease' className={`${GRADIENT_CLASSNAME}`}>
          Latest Release
        </h2>

        {loading
          ? (
            <p>Loading...</p>
            )
          : (
            <>
              {/* Griglia di libri con opzioni di layout responsive */}
              <div className='mx-8 mt-11 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {currentBooks.map((book) => (
                  <SingleBook
                    key={book.asin}
                    book={book}
                    selected={book.asin === selectedBook}
                    onBookSelect={handleBookSelect}
                  />
                ))}
              </div>

              {/* Componente di paginazione con le opzioni fornite dal hook */}
              <Pagination {...paginationOptions} />
            </>
            )}
      </section>

      {/* Sezione laterale per l'area commenti del libro selezionato */}
      <section className='w-1/4'>
        <CommentArea bookAsin={selectedBook} />
      </section>
    </section>
  )
}

export default LatestRelease
