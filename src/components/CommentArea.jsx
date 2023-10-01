import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import { GRADIENT_CLASSNAME } from '../constants/GRADIENT_CLASSNAME'
import { useTheme } from '../contexts/ThemeContext'
import { fetchComments, onDeleteComment } from '../functions/reviewFunctions'

const CommentArea = ({ bookAsin }) => {
  // Stati per gestire i dati dei commenti e gli errori
  const [commentData, setCommentData] = useState([])
  const [error, setError] = useState(null)
  // Ottenere il tema dal contesto
  const { theme } = useTheme()

  // Effetto per caricare i commenti in base al libro selezionato
  useEffect(() => {
    if (bookAsin) {
      fetchComments(bookAsin)
        .then((data) => {
          setCommentData(data)
          setError(null)
        })
        .catch((error) => {
          console.error('Errore durante il recupero dei commenti:', error)
          setError('Si è verificato un errore durante il recupero dei commenti.')
        })
    }
  }, [bookAsin])

  // Gestisce l'aggiunta di un nuovo commento alla lista esistente
  const handleAddComment = (newComment) => {
    if (newComment !== '') {
      setCommentData((prevComments) => [...prevComments, newComment])
    }
  }

  return (
    <aside className={`${theme === 'dark' ? 'text-white' : ''} p-3 h-full`}>
      <h2 className={`${GRADIENT_CLASSNAME}`}>Recensioni</h2>
      {error && <p className='text-red-500'>{error}</p>}
      {commentData.length > 0
        ? (
          <CommentList comments={commentData} onDeleteComment={onDeleteComment} />
          )
        : (
          <p>Non ci sono recensioni disponibili.</p>
          )}
      <AddComment bookAsin={bookAsin} onAddComment={handleAddComment} />
    </aside>
  )
}

export default CommentArea
