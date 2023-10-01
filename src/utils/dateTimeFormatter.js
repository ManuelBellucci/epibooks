/**
 * Formatta una data/ora in una stringa di data e una stringa di ora nel formato italiano.
 * @param {string} createdAt - La data/ora da formattare (deve essere un formato riconosciuto da Date).
 * @returns {Object} - Un oggetto contenente le stringhe formattate di data e ora.
 */

const formatDateTime = (createdAt) => {
  // Converti la stringa della data/ora in un oggetto Date
  const createdAtDateTime = new Date(createdAt)

  // Formatta la data nel formato italiano (giorno/mese/anno)
  const formattedDate = createdAtDateTime.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit'
  })

  // Formatta l'ora nel formato italiano (ora:minuti)
  const formattedTime = createdAtDateTime.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit'
  })

  // Restituisci un oggetto contenente le stringhe formattate di data e ora
  return { formattedDate, formattedTime }
}

export default formatDateTime
