//Entrada - Variáveis
//Média aritimética de 3 notas, e menor 
//Menor que 7 da pra miora, maior 7 gênio
const nota1 = prompt("Digite a 1ª nota")
const nota2 = prompt("Digite a 2ª nota")
const nota3 = prompt("Digite a 3ª nota")
const soma = Number(nota1) + Number(nota2) + Number(nota3)
const media = soma / 3

//menor que 3 menor que 7 e maior que 7

if (media < 3) {
    alert("Horrível: " + media + " - Média é insuficiente")
} 
else if (media < 7 ) {
    alert("Dá pra melhorar! " + media )
}
else  {
    alert("Você está melhorando! Parabéns!!! " + media)
}

    

