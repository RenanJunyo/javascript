function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('ano');
    var res = document.getElementById('res');
    var fanoValue = Number(fano.value);
    var sexo = document.getElementsByName('radio')
    var genero = ''
    var idade = ano - fanoValue;

    if (fano.value.length === 0 || fanoValue > ano || fanoValue <= 1900) {
        res.innerHTML = 'Ano inválido. Verifique e tente novamente.';
        foto.src = ""
        return;
    }

    if (sexo[0].checked){
        genero = 'Masculino'
        
        if(idade >= 0 && idade <= 5)
            foto.src = "fotos/crianca-m.jpg"  

        else if(idade <= 13)
            foto.src = "fotos/crianca-m.10.jpg"
        
        else if(idade <= 18)
            foto.src = "fotos/adolescente.jpg"

        else if (idade < 46)
            foto.src = "fotos/homem-adulto.png"
        
        else
        foto.src = "fotos/homem-idoso.jpg"
    
    }

    else if(sexo[1].checked){
        genero = 'Feminino'

        if(idade >= 0 && idade <= 5)
            foto.src = "fotos/crianca-f.jpg"  

        else if(idade <= 13)
            foto.src = "fotos/crianca-f.10.jpg"
        
        else if(idade <= 18)
            foto.src = "fotos/adolescente-f.jpg"

        else if (idade < 46)
            foto.src = "fotos/mulher-adulta.png"
        
        else
        foto.src = "fotos/mulher-idosa.jpg"
}
    
    res.innerHTML = `Detectamos uma pessoa do genêro ${genero} com ${idade} anos.`;

}