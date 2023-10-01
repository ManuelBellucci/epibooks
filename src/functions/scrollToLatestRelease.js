/**
 * Funzione per scorrere la pagina fino alla sezione delle ultime uscite con uno scorrimento fluido.
 */

export const scrollToLatestRelease = () => {
  // Ottieni l'elemento della sezione delle ultime uscite tramite l'ID
  const latestReleaseSection = document.getElementById('latestRelease')

  // Verifica se l'elemento è stato trovato prima di chiamare scrollIntoView
  if (latestReleaseSection) {
    // Scorrimento fluido alla sezione delle ultime uscite
    latestReleaseSection.scrollIntoView({ behavior: 'smooth' })
  }
}
