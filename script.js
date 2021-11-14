// carne: 400g /pessoa + 6h - 650g
// Cerveja: 1200ml/pessoa +6h - 2000ml
// bebida não alcoolica: 1000ml/pessoa + 6h 1500ml

// ARMAZENAR VALORES DOS IMPUTS transformar em variáveis

let inputAdulto = document.getElementById("adultos");
let inpultCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")



// quando eu clicar no botão calcular, depois de preencher os campos, quero que uma função seja executada 

function calcular(){

let adultos = inputAdulto.value;
let criancas = inpultCriancas.value;
let duracao = inputDuracao.value;

let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
let qtdTotalcerveja = cervejaPP(duracao) * adultos;
let qtdTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
resultado.innerHTML = `<p> ${qtdTotalCarne/1000} kg de carne<p>`
resultado.innerHTML += `<p> ${Math.ceil(qtdTotalcerveja/355)} latas de cerveja<p>`
resultado.innerHTML += `<p> ${Math.ceil(qtdTotalbebidas/2000)} pets 2l de bebida <p>`
}
function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    Else }  
      return 400;
}
function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    Else }  
      return 1200;
}
function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1000;
    Else }  
      return 1500;
}