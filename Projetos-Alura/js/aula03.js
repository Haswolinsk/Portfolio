var listaFilmes = ['https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg',
'https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg',
'https://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg'];
var nomeFilmes = ['Homem-Aranha no Aranhaverso', 'A Chegada', 'Escola do Rock']

var listaAnimes = ["https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg",
"https://gatecima.com/wp-content/uploads/2021/09/24f75e4891b4bcd2db30e699c478d93c-282-poster.jpg",
"https://images.justwatch.com/poster/248497985/s332/one-piece-1999.%7Bformat%7D",
"https://www.jbchost.com.br/editorajbc/wp-content/uploads/2021/05/haikyu-big-01-capa-p.jpg"];
var nomeAnimes = ['Boku no Hero Academia', 'Kimetsu no Yaiba', 'One Piece', 'Haikyu!']

document.write("<h1 class='page-title tipos'>Filmes</h1>")
for (let i = 0; i < listaFilmes.length; i++) {
    document.write(`<p><img src="${listaFilmes[i]}">`);
    document.write(`${nomeFilmes[i]}</p>`);
}
/* document.write('</div>') */

document.write("<h1 class='page-title tipos'>Animes</h1>")
for (let i = 0; i < listaAnimes.length; i++) {
    document.write(`<p><img src="${listaAnimes[i]}">${nomeAnimes[i]}</p>`);
}

