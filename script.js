function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var resposta = document.getElementById('nascimento')
    var idade = ano- Number(resposta.value)
    var genero = document.getElementsByName('sex')
    var res = document.getElementById('res')
    
    

if(idade<1 ){
    alert('Digite um numero valido ')
}else {
    var imag= document.getElementById("imagem")

    if(genero[0].checked ){
        if(idade<12){
            
            imag.setAttribute('src','bebe homem.jpg')
            res.innerHTML=`Voce é um menino de ${idade} anos `
            

        }else if(idade<18){
            imag.setAttribute('src','homem adolescente.jpg')
            res.innerHTML=`Voce é um menino adolescente de ${idade} anos `
            

        }else if(idade< 50){
            res.innerHTML=`Voce é um Homem de ${idade} anos `
            imag.setAttribute('src','homem adulto.jpg')


        }else if(idade>=50){
            res.innerHTML=`Voce é um idoso de ${idade} anos `
            imag.setAttribute('src','homem idoso.jpg')


        }


    }else if(genero[1].checked){
        if(idade<12){
            res.innerHTML=`Voce é uma menina de ${idade} anos `
            imag.setAttribute('src','mulher bebe.webp')

        }else if(idade<18){
            res.innerHTML=`Voce é uma menina adolescente de ${idade} anos `
            imag.setAttribute('src','mulher crianca.jpg')


        }else if(idade< 50){
            res.innerHTML=`Voce é uma Mulher de ${idade} anos `
            imag.setAttribute('src','mulher adulta.jpg')


        }else if(idade>=50){
            res.innerHTML=`Voce é uma idosa de ${idade} anos `
            imag.setAttribute('src','mulher idosa.jpg')


        }

    }
 
    

}

}