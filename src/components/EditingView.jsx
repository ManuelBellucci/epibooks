import React from 'react'

const EditingView = ({ editedComment, setEditedComment, editedRating, setEditedRating, saveChanges, cancelEditing }) => (
  <section className='flex flex-col'>
    {/* Textarea per modificare il testo del commento */}
    <textarea value={editedComment} onChange={(e) => setEditedComment(e.target.value)} className='text-black' />

    {/* Sezione per modificare la valutazione del commento */}
    <div className='flex flex-row mt-2 justify-center max-sm:flex-col max-[890px]:flex-col max-[890px]:gap-1'>

      {/* Selettore per la valutazione */}
      <select value={editedRating} onChange={(e) => setEditedRating(e.target.value)} className='bg-black text-white mr-2 flex flex-grow max-[890px]:mr-0'>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value.toString()}>
            {value}⭐
          </option>
        ))}
      </select>

      {/* Pulsante per salvare le modifiche */}
      <button onClick={saveChanges} className='mr-2 p-1 border border-black bg-slate-400 hover:bg-slate-300 text-black max-[890px]:mr-0'>
        Salva
      </button>

      {/* Pulsante per annullare le modifiche */}
      <button onClick={cancelEditing} className='p-1 border border-black bg-slate-400 hover:bg-slate-300 text-black'>
        Annulla
      </button>
    </div>
  </section>
)

export default EditingView
