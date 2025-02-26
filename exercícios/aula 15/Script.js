function tabuada() {
    var number = document.getElementById('number')
    var tb = document.getElementById('tb')

    if(number.value.length == 0) {
        window.alert('Digite um número válido')
        return;
    }
    else
    var n = Number(number.value)
    var c = 1

    tb.innerText = ''

    while(c <= 15){
        var item = document.createElement('option')
        item.text = `${n} X ${c}: ${n * c}`
        tb.appendChild(item)
        c++
    }
    return;
}