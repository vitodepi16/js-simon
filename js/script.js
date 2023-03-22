/* 

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

array numPC
array numeriUser

array nuneriIndovinati vuoto= []

ciclo su numeriUser: per ogni num in numerUser controllo se è presente in numPC
( includes ) !! numPC.includes(parseInt(numeriUser[i])) !!
    numeriIndovinati.push(numeriUser[i])

    ciclo su numIndovinati per stamparli  (QUALI INDOVINATI)
    stampo numIndovinati.length (QUANTI INDOVINATI)

*/
