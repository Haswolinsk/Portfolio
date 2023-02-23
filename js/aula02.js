function nemGameEasy(){
    easySecret = parseInt(Math.random()*11);
    document.getElementById("Easy").innerHTML = ''
}

var easySecret = parseInt(Math.random()*11);

function levelEasy(){
    var resultChute = document.getElementById("Easy")
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == easySecret){
        resultChute.innerHTML = `Você acertou`;
    } else if(chute> 10 || chute <0) {
        resultChute.innerHTML = `Não esqueça de escolher um numero de 0 a 10`;
    }
    else{
        /* duas opções para apresentação q o valor esta errado */
        if (chute > easySecret) {
            resultChute.innerHTML = `A resposta é menor q o chute`
        }else{
            resultChute.innerHTML = `A resposta é maior q o chute`
        }

        /* resultChute.innerHTML = `Tente Novamente`; */
    }
}


function nemGameMedium(){
    mediumSecret = parseInt(Math.random()*11);
    document.getElementById("Medium").innerHTML = ''
    document.getElementById('bMedio').hidden = false
    contador = -1
}

var mediumSecret = parseInt(Math.random()*11);
var contador = -1;

function levelMedium(){    
    var resultChute = document.getElementById("Medium")
    var chute = parseInt(document.getElementById("medio").value);
    contador++
    if (contador == 3) {
        document.getElementById('bMedio').hidden = true
        resultChute.innerHTML = `Limite de tentaivas atingido. <br>O numero correto era ${mediumSecret}`;
    }else{
        if (chute == mediumSecret){
            resultChute.innerHTML = `Você acertou`;
            
        } else if(chute> 10 || chute <0) {
            resultChute.innerHTML = `Não esqueça de escolher um numero de 0 a 10`;
            
        } 
        else{
            if (chute > mediumSecret) {
                resultChute.innerHTML = `A resposta é menor q o chute`                
            }else{
                resultChute.innerHTML = `A resposta é maior q o chute`
            }             
        }
        
    }  
} 


function nemGameHard(){
    hardSecret = parseInt(Math.random()*11);
    document.getElementById("Hard").innerHTML = ''
}

function levelHard(){
    var hardSecret = parseInt(Math.random()*11);
    var resultChute = document.getElementById("Hard")
    var chute = parseInt(document.getElementById("dificil").value);

    if (chute == hardSecret){
        resultChute.innerHTML = `Você acertou`;
    } else if(chute> 10 || chute <0) {
        resultChute.innerHTML = `Não esqueça de escolher um numero de 0 a 10`;
    }
    else{
        resultChute.innerHTML = `Voce errou :[ <br>O numero correto era ${hardSecret}`;
    }
}