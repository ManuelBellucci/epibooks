# Epicbooks PROJECT BY *[Manuel Bellucci](matiasbelluccimanuel@gmail.com)*

> ##### Nota: Da quel che avevo capito (e da quel che ho sentito non sono l'unico) il progetto non era obbligatorio per il modulo di React. Perciò, avendolo iniziato con l'ottica di non dover consegnarlo, l'avevo iniziato usando lo Stack Front-end che per me era più comodo, con TailwindCSS anzichè con Bootstrap come richiesto dall'esercizio, e usando Vite + React. Per motivi di tempistica, avendo capito ieri 25/09/23 di essere una verifica a tutti gli effetti, ho consegnato il progetto (finito con un po' di fretta, non del tutto responsive e con meno refactor di quanto avrei voluto) con TailwindCSS e non con Bootstrap.

## TECNOLOGIE USATE
- ReactJS + Vite (Javascript + SWC come compilatore)
- TailwindCSS + Autoprefixer + PostCSS
- Standard.JS come ESLint
- Dependencies e versioni: 
    - react v18.2.0
    - react-dom v18.2.0
    - react-router-dom v6.16.0
        - devDependencies:
            - autoprefixer v10.4.16
            - postcss: v8.4.30
            - standard v17.1.0,
            - tailwindcss v3.3.3
            - vite v4.4.5

## TASKS 

1. [✅] Creare un componente MyNav che renderizzi i link Home, About e Browse. 

2. [✅] Creare un componente MyFooter 

3. [✅] Crea un componente LatestRelease, che deve leggere da uno dei JSON forniti e renderizzare una griglia contentente le copertine dei libri 

4. [✅] Creare un componente SingleBook che riceverà un libro come prop e renderizzerà la sua copertina e titolo come card. 

5. [✅] Modifica LatestRelease in modo che il .map renderizzi una lista di SingleBook 

6. [✅] Crea un input controllato all'interno di LatestRelease. Il componente dovrà usare il valore dell'input come filtro per i titoli dei libri e mostrare solo i libri che corrispondono al testo cercato. 

7. [✅] Creare lo stato all'interno di SingleBook e inserisci una proprietà booleana di nome selected. Cliccando sulla copertina di un libro, la proprietà selected cambia valore. Se selected è true, la copertina dovrà avere un bordo rosso. 

8. [✅] Inserisci le operazioni GET e POST in modo che l'utente posso leggere e scrivere recensioni 

    - [✅] crea un componente CommentArea e incorporalo in SingleBook. Quando un utente clicca su un SingleBook, il componente CommentArea deve venire renderizzato (puoi usare selected e l'operatore &&) 

    - [✅] CommentArea deve eseguire un fetch e salvare tutte le recensioni del libro all'interno del suo stato. Deve inoltre renderizzare altri due componenti dentro di sè: CommentList e AddComment 

    - [✅] CommentsList riceverà la lista di recensioni da CommentArea con una prop, e dovrà renderizzare la lista utilizzando un componente SingleComment.

    - [✅] AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5; una volta raccolti i dati, tramite un pulsante (onClick!) verrà effetuata una chiamata POST per inviare le recensioni alle API. 

    - [✅] Inserisci anche DELETE e PUT 

    - [✅] Inserisci spinner e messaggi di errore 

9. [✅] Spostare il campo di ricerca in MyNav, dovrà sempre essere utilizzato per filtrare i libri della lista all'interno di LatestRelease. Il compito è farlo usando la state elevation. Istruzioni:
    - [✅] Converti App in un componente classe, e crea al suo interno lo stato con una proprietà chiama 'query' che conterrà una stringa.
    - [✅] MyNav ora prenderà 2 props: query, che prenderà il valore di 'query' nello stato di App, e una seconda prop setQuery che avrà come valore una funzione che prenda un parametro e cambi il valore di query nello stato di App nel valore di quel parametro

10. [✅] Quella queste due prop all'input dentro MyNav, rendendolo un input controllato.

11. [✅] Passa il valore di query dallo stato di App anche al componente LatestRelease, usando una prop con nome a tua scelta. 

12. [✅] Usa questa prop di LatestRelease per filtrare i libri. Dovresti già avere questa funzionalità, dovrai solo cambiare l'origine della query, che non sarà più salvata nello stato ma proverrà delle props.

13. [✅] Permetti all'applicazione di avere solo UN libro selezionato alla volta. Cliccando su una copertina diversa, il libro precedente deve de-selezionarsi, e il nuovo libro selezionato deve aggiornare la lista di commenti. Questo richiederà di elevare la proprietà 'selected' dallo stato di SingleBook, allo stato di BookList, e il suo valore non sara più true/false ma conterrà l'ASIN del libro attualmente selezionato. Per raggiungere questa funzionalità puoi seguire la strategia che hai appena messo in atto per il task precedente. 

14. [✅] Utilizza React.Context per condividere con l'intera applicazione una proprietà 'theme': il suo valore può essere light o dark, e deve influenziare qualche proprietà visiva dei componenti principali (MyNav, BookList, SingleBook, etc.). Fornisci anche un modo per cambiare valore alla proprietà 'theme' (da light a dark e viceversa) e verifica che l'applicazione riceva il nuovo valore alla modifica dello stesso. 

15. [✅] Dobbiamo modificare il layout dell'applicazione: crea due colonne, quella di sinistra continuerà a mostrare le copertine dei libri, mentre quella sulla destra mostrerà SEMPRE un componente CommentArea. Infine rimuovi l'altra istanza di CommentArea, quella presente all'interno di SingleBook.

16. [✅] Al caricamento dell'applicazione, CommentArea non riceverà più immediatamente un libro per effetuare la fetch delle recensioni; fai in modo che CommentArea non provochi un crash dell'intera applicazione quando ancora non possiede dati da mostrare (ricordi i valori iniziali dello state?)

17. [✅] Passa il valore di 'selected' sia a SingleBook che a CommentArea. Quando cambia il valore di 'selected', CommentArea deve eseguire una nuova fetch con il nuovo valore di 'selected', e le recensioni nella colonna di destra devono riflettere il libro selezionato nella colonna di sinistra. Utilizza componentDidUpdate e non dimenticarti di sfruttare le sue prop per non imbatterti in un loop infinito. 

18. [✅] Assicurati che l'ASIN del libro (nella prop 'selected') arrivi anche a AddComment in modo da mantenere aggiornata la sua proprietà elementId (necessaria per la richiesta POST) con il libro attualmente selezionato.

19. [✅] Trasforma qualchè componente classe in componente a funzione. Inizia da quelli più semplici e poi continua con quelli più complessi. FARE COMMIT E PUSH QUA. 

20. [✅] Crea una rotta per l'homepage dell'applicazione: dovrebbe puntare a '/' e caricare il componente LastRelease.

21. [✅] Crea un componente NotFound, dovrebbe venire renderizzato ogni volta che l'utente naviga su una rotta non gestita.

22. [✅] Crea una rotta per un nuovo componente BookDetails. Questa rotta deve passare un parametro ASIN tramite useParams. Aggiungi un pulsante in ogni SingleBook per poter navigare a questa nuova rotta dinamica e caricare BookDetails. Crea infine il componente BookDetails, che recupererà il parametro ASIN dall'url e caricherà i dettagli e le recensioni del libro su cui si è cliccato. Per recuperare le informazioni del libro selezionato, usa la state elevation.



