import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fantasyData from '../api/fantasy.json'

function BookDetails () {
  const { asin } = useParams()
  const [bookDetails, setBookDetails] = useState(null)

  useEffect(() => {
    // Trova il libro corrispondente all'ASIN nei dati locali
    const selectedBook = fantasyData.find(book => book.asin === asin)

    // Imposto i dettagli del libro se trovato
    if (selectedBook) {
      setBookDetails(selectedBook)
    }
  }, [asin])

  if (!bookDetails) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='flex flex-col items-center gap-6 mx-auto my-6 bg-white border border-black rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200'>
        <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={bookDetails.img} alt={bookDetails.title} />
        <div className='flex flex-col gap-3 justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{bookDetails.title}</h5>
          <p className='text-[.75rem] mb-3'>ID: {bookDetails.asin} </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Categoria: {bookDetails.category}</p>
          <p>Prezzo: {bookDetails.price}€ </p>
        </div>
      </div>
    </>
  )
}

export default BookDetails
