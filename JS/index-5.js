/*
5. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/

let velocidade = 90;
let multa = (velocidade - 80) * 5


if(velocidade > 80){
    console.log(`Você foi multado por exceder o limite de velocidade permitido. O valor da multa é de ${multa} reais`)
}
else {
    console.log('Você está na velocidade permitida.')
}