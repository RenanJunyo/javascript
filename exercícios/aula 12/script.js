function Hora() {
    var mensagem = document.getElementById('mensagem');
    var foto = document.getElementById('foto');
    var agora = new Date();
    var hora = agora.getHours();

    if(isNaN(hora) || hora < 0 || hora > 24){
        mensagem.innerHTML = 'Este horário não está correto'
        return;
    }

    if(hora >= 0 && hora <= 12){
    //Manhã
    mensagem.innerHTML = `Agora são ${hora} horas. Bom dia!!!`
    foto.src = 'imagens/Dia.png'
    }

    else  if (hora >= 12 && hora <= 18){
    //Tarde
        mensagem.innerHTML = `Agora são ${hora} horas. Boa tarde!!!`
        foto.src = 'imagens/Tarde.png'
        document.body.style.background = '#FF8441'
    }
    
    else{
    //Noite
    mensagem.innerHTML = `Agora são ${hora} horas. Boa noite`
    foto.src = 'imagens/Noite.png'
    document.body.style.background = '#171723'
    }
}