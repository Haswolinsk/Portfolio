function contar(){
    let inicio = Number(document.querySelector('#start').value)
    let fim = document.querySelector('#end').value
    let passo = Number(document.querySelector('#step').value)
    var contagem = document.querySelector('#txt > p')

    console.log(inicio, fim, passo);
    if (fim.length == 0){  
        //no lugar do teste ser feito com as aspas: fim == ''
        //existe a possibilidade fazer o teste com o tamanho do valor preenchido
        //tive q tirar o Number() dele pq qnd é feita a conversão ele automaticamente atribui o valor 0 para aquela variavel

        contagem.innerHTML = 'Preencha o valor Final!'
    }else if(inicio == ''){
        contagem.innerHTML = 'Preencha o valor Inicial!'
    }else{
        fim = Number(fim) 
        //conversão feita da forma mais bruta possivel por causa do exemplo feito anteriormente

        if(passo == '' || passo <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1!')
            passo = 1
        }

        if (inicio < fim){
            contagem.innerHTML = `Contagem:<br>${inicio} \u{1F449} `
            while (inicio < fim) {
                inicio = inicio + passo;
                contagem.innerHTML += `${inicio} \u{1F449} `
                
            }
        }else{
            contagem.innerHTML = `Contagem:<br>${inicio} \u{1F449} `
            while (inicio > fim) {
                inicio = inicio - passo;
                contagem.innerHTML += `${inicio} \u{1F449} `
                
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
}

/* 
                Resposta da aula:
!!adaptado as minhas variaveis para melhor compreensão!!

let inicio = document.querySelector('#start')
let fim = document.querySelector('#end')
let passo = document.querySelector('#step')
var contagem = document.querySelector('#txt > p')

if inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    contagem.innerHTML = 'Impossivel Contar!'
}else{
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    contagem.innerHTML = 'Contando: '
    if (i < f) {
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
    }else{
        for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449} `
        }
    }
    contagem.innerHTML += `\u{1F3C1}`
}

--------------------------------------------------------------------------------------------
Principal diferença seja pq o professor guanabara utilizou o for e eu o while
Outro ponto foi a declaração de novas variaveis para manipulação dela modificada
> aumentou as linhas de codigo mas ficou um pouco mais organizado
> talvez em grandes projetos esse seja o formato mais usual porem ainda preciso de pratico pratica pra afirmar isso

*/