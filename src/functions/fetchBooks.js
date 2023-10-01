/**
 * Funzione asincrona per recuperare i dati dei libri dalla risorsa JSON.
 * @returns {Promise} Una Promise che restituisce i dati dei libri.
 * @throws {Error} Viene lanciato un errore se la richiesta non va a buon fine.
 */

export function fetchBooks () {
  return fetch('src/api/fantasy.json')
    .then((response) => {
      // Gestione degli errori nella risposta
      if (!response.ok) {
        throw new Error('Errore nella richiesta')
      }

      // Restituzione dei dati in formato JSON
      return response.json()
    })
}
