function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('ano').value
    var imagem = document.getElementById('txt')

    if (nascimento == ''){
        imagem.style.color = 'red'
        imagem.style.fontWeight = 'bold'

    }else if (nascimento > ano){
        window.alert('[ERROR] Ano Inválido!')
    }
    else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - nascimento
        var genero = ''

        if (sexo[0].checked){
            if (idade >= 0 && idade < 12){
                genero = 'uma criança'
            }else if(idade < 21){
                genero = 'um jovem'
            }else if(idade < 60){
                genero = 'um Homem'
            }else{
                genero = 'um idoso'
            }
            
        }else if (sexo[1].checked){
            if (idade >= 0 && idade < 12){
                genero = 'uma Criança'
            }else if(idade < 21){
                genero = 'uma Jovem'
            }else if(idade < 60){
                genero = 'uma Mulher'
            }else{
                genero = 'uma Idosa'
            }
        }



        imagem.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    }
    
}
