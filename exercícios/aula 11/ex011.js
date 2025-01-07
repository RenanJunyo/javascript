var idade = 18;
console.log(`Você tem ${idade} anos`);
    if(idade <= 15) {
        console.log('Você não possui idade suficiente para votar');
    }
    else if(idade  < 18 || idade > 69)  
        console.log('O voto é facultativo.');
    else 
        console.log('O seu voto é obrigátorio.');
    