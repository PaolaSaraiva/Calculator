
const $primeirooperador = document.querySelector("#primeiro")
const $segundooperador = document.querySelector("#segundo")
const $soma = document.querySelector("#soma")
const $subtracao = document.querySelector("#subtracao")
const $divisao = document.querySelector("#divisao")
const $multiplicacao = document.querySelector("#multiplicacao")
const $resultado = document.querySelector("#resultado")
const $limpar = document.querySelector("#limpar")

function somar() {
    const primeirooperador = Number($primeirooperador.value) 
    const segundooperador = Number($segundooperador.value)
    $resultado.innerHTML = primeirooperador + segundooperador
}

function subtrair() {
    const primeirooperador = $primeirooperador.value
    const segundooperador = $segundooperador.value
    $resultado.innerHTML = primeirooperador - segundooperador
}

function dividir() {
    const primeirooperador = $primeirooperador.value
    const segundooperador = $segundooperador.value
    $resultado.innerHTML = primeirooperador / segundooperador
}

function multiplicar() {
    const primeirooperador = $primeirooperador.value
    const segundooperador = $segundooperador.value
    $resultado.innerHTML = primeirooperador * segundooperador
}

function limpar() {
    $primeirooperador.value = ""
    $segundooperador.value = ""
    $resultado.innerHTML = ""

}

$soma.onclick = somar

$subtracao.onclick = subtrair

$divisao.onclick = dividir

$multiplicacao.onclick = multiplicar

$limpar.onclick = limpar
