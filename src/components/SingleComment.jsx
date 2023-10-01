import React from 'react'
import useComment from '../hooks/useComment'
import Loader from './Loader'
import EditingView from './EditingView'
import DisplayView from '../components/DisplayView'
import formatDateTime from '../utils/dateTimeFormatter'

// Componente per visualizzare un singolo commento
const SingleComment = ({ comment }) => {
  // Utilizzo un custom hook per gestire lo stato del commento
  const {
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
  } = useComment(comment)

  // Formatta data e ora del commento
  const { formattedDate, formattedTime } = formatDateTime(comment.createdAt)

  return (
    <div className='mt-4 border border-gray-400 rounded p-3'>
      {/* Sezione Loader durante il caricamento */}
      {isLoading
        ? (
          <Loader />
          )
        : isEditing
          ? (
            // Sezione di modifica del commento
            <EditingView
              editedComment={editedComment}
              setEditedComment={setEditedComment}
              editedRating={editedRating}
              setEditedRating={setEditedRating}
              saveChanges={saveChanges}
              cancelEditing={cancelEditing}
            />
            )
          : (
            // Sezione di visualizzazione del commento
            <DisplayView
              comment={comment}
              formattedDate={formattedDate}
              formattedTime={formattedTime}
              startEditing={startEditing}
              isDeleting={isDeleting}
              deleteComment={deleteComment}
            />
            )}
    </div>
  )
}

export default SingleComment
