// 1- Crie uma função que receba um número e retorne o dobro.

function valor(numero) {
    return numero * 2
}
console.log("O dobro do valor é: "
    + valor(7));


// 2- Crie uma função que receba um número e retorne o triplo.

function triplo(numeros) {
    return numeros * 3
}
console.log("O triplo do valor é: "
    + triplo(7));

//3- Crie uma função que receba dois números e retorne a soma.

function soma(numero1, numero2) {
    return numero1 + numero2
}
console.log("A soma dos valores é: " + soma(60, 7));

// 4- Crie uma função que receba dois números e retorne a multiplicação.

function multi(numero1, numero2) {
    return numero1 * numero2 
}
console.log("A multiplicação deles é: " + multi(7, 7));

//5- Crie uma função que receba um salário e calcule aumento de 10%. 

function salario(salarioInicial, aumento) {
    return salarioInicial * aumento  + salarioInicial
}

console.log( "Seu salário aumentou 10%, fazendo ele ficar com o valor de " + salario(5000, 0.10));

// 6 - Crie uma função que imprima números de 1 até 10.
function imprimirNumeros() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
imprimirNumeros();

// 7- Crie uma função que some todos os números até 10.
function somarNumeros() {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += i;
  }
  console.log(soma); 
}
somarNumeros();