let numeroSecreto = parseInt(Math.random() * 101);
let lista = document.querySelector('select#flista')
let chute = window.document.getElementById('fnum');
let valores = []

function isNumero(n) {
    if(Number(n) >= 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function tentar() {
    var valor = Number(chute.value)
 
    if (isNumero(valor) && !inLista(valor, valores)) {
        valores.push(valor)
        let item = document.createElement('option')
        item.text = `O valor adicionado foi ${valor}.`
        lista.appendChild(item)
    } else {
        window.alert('Número inválido ou já adicionado!')
        } if (valor == numeroSecreto) {
            res.innerHTML = 'Acertou!'
        } else if (valor > numeroSecreto) {
            res.innerHTML = 'Errou... o número secreto é menor!'
        } else if (valor < numeroSecreto) {
            res.innerHTML = 'Errou... o número secreto é maior!'
        } else {
            res.innerHTML = 'Adicione um número!!'
        }
    chute.value = ''  
    chute.focus()
}