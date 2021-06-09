
var random = [];
var numMax = 100;


function generaRandom(){

    for(var i = 0; i < 16 ; i++){
        var numeroRandom = Math.floor(Math.random() * 100) + 1;
        if(random.indexOf(numeroRandom) == -1){
            random.push(numeroRandom);
        }
        else
         i--;
    }
    console.log(random);
}


function numeroUtente(){
    var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
    var punteggio = 0;
    for (var i = 0; i < numMax - random.length; i++){
        if(random.includes(numeroUtente)){
        document.getElementById('perso').innerHTML = 'Hai perso';
        
        } else {
            var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
            var punteggio = punteggio + 1;
            console.log(punteggio);
        } 
    } document.getElementById('risultato').innerHTML = ('Hai totalizzato' + ' ' + punteggio + ' ' + 'punti');
}

generaRandom();
numeroUtente();




