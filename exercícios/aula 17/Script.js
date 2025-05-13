var n = document.getElementById('numero')
var l = document.getElementById('lista')
var a = document.getElementById('apresentar')
var valor = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isnumero(n.value) && !inlista(n.value, valor)) {
        valor.push(Number(n.value))
        var item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado a lista`
        l.appendChild(item)
        a.innerHTML = ''

    }else {
        window.alert('Valor inválido ou já encontrado na lista')

    }

    n.value = ''
    n.focus()
}

function finalizar() {
    if(valor.length == 0) {
        window.alert('Adicione números antes de finalizar')
    }else {
        var total = valor.length
        var maior = valor[0]
        var menor = valor[0]
        var soma = 0
        var media = 0


        for(var i in valor) {
            soma += valor[i]
            var maior = Math.max(...valor)
            var menor = Math.min(...valor)
            

        }
        media = soma / total        
        a.innerHTML = ''
        a.innerHTML += `<p>Ao todos temos ${total} valores adicionados a lista</p>`
        a.innerHTML += `<p>O maior valor inserido foi ${maior}</p>`
        a.innerHTML += `<p>O menor valor inserido foi ${menor}</p>`
        a.innerHTML += `<p>A soma de todos os valores é de ${soma}</p>`
        a.innerHTML += `<p>A media de todos os valores digitados é ${media.toFixed(1)}</p>`
    }

    
}