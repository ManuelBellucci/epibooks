import { useState, useEffect } from 'react'
import { fetchBooks } from '../functions/fetchBooks'
import { fetchInitialData } from '../functions/fetchInitialData'

/**
 * Hook per gestire lo stato dei dati dei libri, la ricerca e la paginazione.
 * @param {string} query - La stringa di ricerca dei libri.
 * @returns {Object} - Oggetto contenente i libri attualmente visualizzati, le opzioni di paginazione
 *                   e funzioni per gestire la selezione di un libro.
 */

export const useBookData = (query) => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBook, setSelectedBook] = useState(null)
  const itemsPerPage = 12

  // Effetto per caricare i libri iniziali al mount del componente
  useEffect(() => {
    fetchInitialData(fetchBooks, setBooks, setFilteredBooks)
  }, [])

  // Effetto per filtrare i libri in base alla query di ricerca
  useEffect(() => {
    setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase())))
    setCurrentPage(1)
  }, [query, books])

  // Calcola i libri attualmente visualizzati in base alla pagina corrente
  const calculateCurrentBooks = () => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return filteredBooks.slice(indexOfFirstItem, indexOfLastItem)
  }

  const currentBooks = calculateCurrentBooks()

  // Opzioni di paginazione
  const paginationOptions = {
    currentPage,
    totalPages: Math.ceil(filteredBooks.length / itemsPerPage),
    onNextPage: () => handlePagination('next'),
    onPrevPage: () => handlePagination('prev')
  }

  // Gestisce la paginazione in base all'azione (next o prev)
  const handlePagination = (action) => {
    if (action === 'next' && currentPage < Math.ceil(filteredBooks.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1)
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Gestisce la selezione di un libro
  const handleBookSelect = (asin) => {
    setSelectedBook(asin)
  }

  // Restituisce gli elementi esposti dal hook
  return { currentBooks, paginationOptions, handleBookSelect, selectedBook }
}
