// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var studente = {
  'nome' : 'Leonardo',
  'cognome' : 'Martino',
  'eta' : '38'
};

// Stampare a schermo attraverso il for in tutte le proprietà.

for (var field in  studente) {
  console.log(studente[field]);
};

// - Creare un array di oggetti di studenti.

var studenti = [
{
  'nome' : 'Leonardo',
  'cognome' : 'Martino',
  'eta' : '38'
},
{
  'nome' : 'Sofia',
  'cognome' : 'Cattalini',
  'eta' : '38'
},
{
  'nome' : 'Lahee',
  'cognome' : 'Choi',
  'eta' : '32'
}
];

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

for (var i = 0; i < studenti.length; i++) {
 console.log(studenti[i].nome, studenti[i].cognome);
};

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creazione oggetto
var aggiungi_studente = {};

// riempimento da parte dell'utente

aggiungi_studente.nome = prompt('inserisci nome');
aggiungi_studente.cognome = prompt('inserisci cognome');
aggiungi_studente.eta = prompt('inserisci età');

// verifica con un log
console.log(aggiungi_studente);

// inserimento dell'oggetto alla fine dell'array
studenti.push(aggiungi_studente);

// verifica inserimento con un log
console.log(studenti);
