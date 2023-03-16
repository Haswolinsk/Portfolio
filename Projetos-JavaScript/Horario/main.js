function carregar(){
    var data = new Date()
    var horas = data.getHours()
    var horario = document.getElementById('horario')
    var imagem = document.getElementById('imagem')
    var body = window.document.getElementsByTagName('body')[0]

    horario.innerHTML = `<p>Agora são ${horas} horas</p>`

    if (horas >= 4 && horas <= 12){
        imagem.src = 'https://okdiario.com/img/2018/06/26/por-que-no-se-ven-las-estrellas-durante-el-dia-655x368.jpg'
        //maneira mais facil de acessar o caminho do link da imagem!
        body.style.background = 'rgb(200 188 140)'
    }else if (horas >= 13 && horas < 18){
        imagem.src = 'https://fotografias.antena3.com/clipping/cmsimages02/2022/12/08/3985CA57-975D-4120-8AAE-10FD182CAF7C/solsticio-invierno-que-dia-mas-corto-ano_98.jpg'
        body.style.background = 'rgb(153, 111, 95)'
    }else{
        imagem.src = 'https://cdn.olhares.com/client/files/foto/big/121/1219274.jpg'
        body.style.background = 'rgb(66, 68, 68)'
    }
}
