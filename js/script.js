var nomeUtente = prompt('Quale é il tuo nome?');
var cognomeUtente = prompt('Quale é il tuo cognome?');
var coloreUtente = prompt('Quale é il tuo colore preferito?');
var annoCorrente = new Date().getFullYear();
var annoNascitaUtente = prompt('Quale é il tuo anno di nascita?');
var ageUtente = annoCorrente - annoNascitaUtente;


var outputContainer = document.getElementById('pswgenerator');
outputContainer.innerText = '\nEcco la tua password infallibile:\n' + nomeUtente + cognomeUtente + coloreUtente + ageUtente;
