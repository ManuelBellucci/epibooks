/* NON LO STO USANDO PIU */

// import React, { useState } from 'react'
// import { updateReview } from '../functions/reviewFunctions'

// // Hook personalizzato per la gestione del modulo di modifica della recensione
// const useReviewForm = (initialComment) => {
//   // Stati per gestire il commento aggiornato, gli errori e il successo
//   const [updatedComment, setUpdatedComment] = useState(initialComment)
//   const [error, setError] = useState(null)
//   const [success, setSuccess] = useState(false)

//   // Gestisce l'aggiornamento della recensione
//   const handleUpdate = async (commentId) => {
//     try {
//       // Crea l'oggetto della recensione aggiornata
//       const updatedReview = { comment: updatedComment }

//       // Chiama la funzione per aggiornare la recensione
//       await updateReview(commentId, updatedReview)

//       // Resetta gli stati degli errori e del successo
//       setError(null)
//       setSuccess(true)
//     } catch (error) {
//       // Gestisce gli errori durante l'aggiornamento della recensione
//       setError(error.message || 'An error occurred')
//       setSuccess(false)
//     }
//   }

//   return {
//     updatedComment,
//     setUpdatedComment,
//     handleUpdate,
//     error,
//     success
//   }
// }

// // Componente per il modulo di modifica della recensione
// const EditReviewForm = ({ comment }) => {
//   // Utilizza il hook personalizzato per gestire lo stato del modulo di modifica
//   const { updatedComment, setUpdatedComment, handleUpdate, error, success } = useReviewForm(comment.comment)

//   return (
//     <div>
//       {/* Textarea per modificare il commento */}
//       <textarea
//         value={updatedComment}
//         onChange={(e) => setUpdatedComment(e.target.value)}
//       />

//       {/* Pulsante per salvare le modifiche */}
//       <button onClick={() => handleUpdate(comment._id)}>Salva modifiche</button>

//       {/* Visualizza messaggio di errore se presente */}
//       {error && <p className='text-red-500'>{error}</p>}

//       {/* Visualizza messaggio di successo se l'aggiornamento è avvenuto con successo */}
//       {success && <p className='text-green-500'>Recensione aggiornata con successo!</p>}
//     </div>
//   )
// }

// export default EditReviewForm
