import { useState } from 'react'
import { deleteReview, updateReview } from '../functions/reviewFunctions'

/**
 * Hook per gestire lo stato di un commento, inclusi gli stati di editing, cancellazione e caricamento.
 * @param {Object} initialComment - Il commento iniziale.
 * @returns {Object} - Oggetto contenente gli stati e le funzioni per gestire il commento.
 */

const useComment = (initialComment) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedComment, setEditedComment] = useState(initialComment.comment)
  const [editedRating, setEditedRating] = useState(initialComment.rate)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Avvia la modalità di editing
  const startEditing = () => {
    setIsEditing(true)
  }

  // Annulla le modifiche in modalità di editing
  const cancelEditing = () => {
    setIsEditing(false)
    setEditedComment(initialComment.comment)
    setEditedRating(initialComment.rate)
  }

  // Salva le modifiche apportate al commento
  const saveChanges = () => {
    setIsLoading(true)
    const updatedComment = {
      comment: editedComment,
      rate: editedRating
    }

    // Chiama la funzione di aggiornamento del commento
    updateReview(initialComment._id, updatedComment)
      .then(() => {
        setIsLoading(false)
        setIsEditing(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Error updating review:', error.message)
      })
  }

  // Cancella il commento
  const deleteComment = () => {
    setIsDeleting(true)

    // Chiama la funzione di cancellazione del commento
    deleteReview(initialComment._id)
      .then(() => {
        setIsDeleting(false)
      })
      .catch((error) => {
        setIsDeleting(false)
        console.error('Error deleting review:', error.message)
      })
  }

  // Restituisce gli elementi esposti dal hook
  return {
    isEditing,
    editedComment,
    setEditedComment,
    editedRating,
    setEditedRating,
    isDeleting,
    isLoading,
    startEditing,
    cancelEditing,
    saveChanges,
    deleteComment
  }
}

export default useComment
