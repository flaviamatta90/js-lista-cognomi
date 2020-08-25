// // 1 Chiedere all’utente il cognome
var cognomeUtente = prompt('Scrivi il tuo cognome').toUpperCase();

while (cognomeUtente.length <= 0) {
  cognomeUtente = prompt("Scrivi il tuo Cognome").toUpperCase();
}

// // 2 Inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 3 Aggiungo il cognome utente nell'array
cognomi.push(cognomeUtente);

// 4 stampa la lista ordinata alfabeticamente
cognomi.sort();
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById("lista-cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}

// 5 Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var posizione = cognomi.indexOf(cognomeUtente) + 1;
console.log('Sei il numero ' + posizione)
