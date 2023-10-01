import { AUTH_TOKEN } from '../constants/AUTH_TOKEN'

/**
 * Funzione asincrona per aggiornare una recensione esistente.
 * @param {string} commentId - Identificativo univoco della recensione da aggiornare.
 * @param {Object} updatedReview - Oggetto contenente i dati aggiornati della recensione.
 * @throws {Error} Viene lanciato un errore se si verifica un problema durante l'aggiornamento della recensione.
 */

export const updateReview = async (commentId, updatedReview) => {
  if (!commentId) {
    throw new Error('CommentId is undefined')
  }
  const apiUrl = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`

  try {
    // Invio della richiesta di aggiornamento al server
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN
      },
      body: JSON.stringify(updatedReview)
    })

    // Verifica della risposta del server
    if (!response.ok) {
      throw new Error('Errore durante l\'aggiornamento della recensione')
    }

    console.log('Recensione aggiornata con successo')
  } catch (error) {
    // Gestione degli errori durante l'aggiornamento della recensione
    console.error('Errore durante l\'aggiornamento della recensione:', error)
    throw error
  }
}

/**
 * Funzione asincrona per eliminare una recensione esistente.
 * @param {string} commentId - Identificativo univoco della recensione da eliminare.
 * @throws {Error} Viene lanciato un errore se si verifica un problema durante l'eliminazione della recensione.
 */

export const deleteReview = async (commentId) => {
  const apiUrl = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`

  try {
    // Invio della richiesta di eliminazione al server
    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN
      }
    })

    // Verifica della risposta del server
    if (!response.ok) {
      throw new Error('Errore durante la cancellazione della recensione')
    }

    console.log('Recensione cancellata con successo')
  } catch (error) {
    // Gestione degli errori durante l'eliminazione della recensione
    console.error('Errore durante la cancellazione della recensione:', error)
    throw error
  }
}

/**
 * Funzione asincrona per gestire l'invio di una recensione.
 * @param {string} bookAsin - Identificativo univoco del libro.
 * @param {string} commentText - Testo della recensione.
 * @param {number} rating - Valutazione numerica della recensione.
 * @param {Function} onAddComment - Funzione per aggiungere una nuova recensione allo stato.
 * @throws {Error} Viene lanciato un errore se si verifica un problema durante l'invio della recensione.
 */

export const handleSubmit = async (bookAsin, commentText, rating, onAddComment) => {
  const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
  try {
    // Creazione di una nuova recensione
    const newReview = {
      comment: commentText,
      rate: rating.toString(),
      elementId: bookAsin
    }

    // Invio della recensione al server
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN
      },
      body: JSON.stringify(newReview)
    })

    // Verifica della risposta del server
    if (!response.ok) {
      throw new Error('Errore durante l\'invio della recensione')
    }

    // Aggiunta della nuova recensione allo stato
    onAddComment(newReview)

    console.log('Recensione inviata con successo')
  } catch (error) {
    // Gestione degli errori durante l'invio della recensione
    console.error('Errore durante l\'invio della recensione:', error)
  }
}

// Funzione asincrona per recuperare i commenti di un libro
export async function fetchComments (selectedBookAsin) {
  const apiUrl = `https://striveschool-api.herokuapp.com/api/comments/${selectedBookAsin}`

  // Richiesta di recupero dei commenti con token di autorizzazione
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: AUTH_TOKEN
    }
  })

  // Gestione degli errori nella risposta
  if (!response.ok) {
    throw new Error('Errore durante il recupero dei commenti')
  }
  // Restituzione dei dati in formato JSON
  return response.json()
}

// Funzione per gestire l'eliminazione di un commento
export async function handleDeleteComment (commentId, commentData, setCommentData, setError) {
  // Chiamata alla funzione per eliminare la recensione dal server
  await deleteReview(commentId)

  // Aggiornamento dei commenti locali escludendo quello eliminato
  const updatedComments = commentData.filter(
    (comment) => comment.commentId !== commentId
  )

  // Aggiornamento dello stato dei commenti e azzeramento dell'errore
  setCommentData(updatedComments)
  setError(null)
}

// Funzione per gestire l'eliminazione di un commento con gestione degli errori
export const onDeleteComment = async (commentId, commentData, setCommentData, setError) => {
  try {
    // Chiamata alla funzione di gestione eliminazione del commento
    await handleDeleteComment(commentId, commentData, setCommentData, setError)
  } catch (error) {
    console.error("Errore durante l'eliminazione della recensione:", error)
    setError("Si è verificato un errore durante l'eliminazione della recensione.")
  }
}
