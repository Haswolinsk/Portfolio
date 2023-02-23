
/* Projeto incompleto... */


var jogadores = []
var listaJogadores = []
/* var listaJogadores = {
    nome: '',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
} */



for (let i = 0; i < jogadores.length; i++) {
    var listaJogadores = listaJogadores + {
        nome: jogadores[i],
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    }
}
var posicao = -1
var elementoTabela = document.getElementById('tabelaJogadores')
function exibirNaTela(){
    for (let i = 0; i < listaJogadores.length; i++) {
        var contador = posicao
        elementoTabela.innerHTML = elementoTabela.innerHTML + `
            <tr>
                <td>${listaJogadores[i].nome}</td>
                <td>${listaJogadores[i].vitoria}</td>
                <td>${listaJogadores[i].empate}</td>
                <td>${listaJogadores[i].derrota}</td>
                <td>${listaJogadores[i].pontos}</td>
                <td><button onClick="adicionarVitoria(this)">Vitória</button></td>
                <td><button onClick="adicionarEmpate(contador)">Empate</button></td>
                <td><button onClick="adicionarDerrota(contador)">Derrota</button></td>
            </tr>
        ` 
        
    }
    
}


function adicionarNome(){
    var adicionarNome = document.getElementById('nome').value
    jogadores.push(adicionarNome)

    var jogadorInicial = {
        nome: adicionarNome,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    }
    posicao++
    listaJogadores.push(jogadorInicial)
    exibirNaTela()
}

function adicionarVitoria(listaJogadores){
    /* for (let i = 0; i < listaJogadores.length; i++) {
        if (contador == i){
            
            break;
        }
    } */

    listaJogadores[i].vitoria++;
    listaJogadores[i].pontos = listaJogadores[i].pontos + 3;
    
    exibirNaTela();
}

function adicionarEmpate(){
    listaJogadores[contador-1].empate++
    listaJogadores[contador-1].pontos = listaJogadores[contador-1].pontos + 1;
    exibirNaTela();
}

function adicionarDerrota(){
    listaJogadores[contador-1].derrota++
    exibirNaTela();
}