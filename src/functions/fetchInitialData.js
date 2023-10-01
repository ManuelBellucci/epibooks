/**
 * Funzione asincrona per recuperare e impostare i dati iniziali dei libri.
 * @param {Function} fetchBooks - Funzione per recuperare i dati dei libri.
 * @param {Function} setBooks - Funzione per impostare lo stato dei libri.
 * @param {Function} setFilteredBooks - Funzione per impostare lo stato dei libri filtrati.
 * @throws {Error} Viene lanciato un errore se si verifica un problema durante il recupero dei dati.
 */

export const fetchInitialData = async (fetchBooks, setBooks, setFilteredBooks) => {
  try {
    // Recupero dei dati dei libri
    const data = await fetchBooks()

    // Impostazione degli stati con i dati recuperati
    setBooks(data)
    setFilteredBooks(data)
    return data
  } catch (error) {
    // Gestione degli errori durante il recupero dei dati
    console.error('Errore nella richiesta:', error)
    throw error
  }
}
