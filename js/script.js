
var random = [];

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

    for (var i = 0; i < 100; i++){
        if(random.includes(numeroUtente)){
        document.getElementById('perso').innerHTML = 'Hai perso';
        
        } else {
            var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
        }
    }
}

generaRandom();
numeroUtente();




