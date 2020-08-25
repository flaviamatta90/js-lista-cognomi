// 1 Chiedere all’utente il cognome
var cognome = prompt('Scrivi il tuo cognome');

// 2 Inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var altriCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var totale = altriCognomi.push(cognome);
altriCognomi.sort(); 
console.log(altriCognomi);

// 3 stampa la lista ordinata alfabeticamente

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
