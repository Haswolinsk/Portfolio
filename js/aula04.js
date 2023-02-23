

function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value
    var trailer = document.getElementById("trailer").value
    var nomeFilme = document.getElementById("nomeFilme").value
    var escrever = document.getElementById("listaFilmes")
    console.log(nomeFilme);
    if (trailer == null || trailer == ""){
        escrever.innerHTML = escrever.innerHTML + `<img src="${filmeFavorito}">`

    }else if (filmeFavorito == null || filmeFavorito == ""){
        window.alert(`Insira um banner de filme!`)
    }else{
        escrever.innerHTML = escrever.innerHTML + `
        <div class='ajuste'>
            <a href="${trailer}" target='_blank'>
                <img src="${filmeFavorito}">
            </a>
            <p class="page-subtitle">
                ${nomeFilme}
            </p>
        </div>
        <button onClick="removerFilme(nomeFilme)">X</button>`
    }
}

function removerFilme(nomeFilme){
    escrever.innerHTML = ``
}