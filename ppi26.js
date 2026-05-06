// PPI - Introdução à Programação para Internet
// ALUNO: Guilherme Silva
// Ativar o formatador, atalho: Alt + Shift + F

// Aula 06/05 - Introdução a JavaScript

console.log('Bem-vindos a PPI');


// Variáveis
let nome = 'Guilherme';
let idade = 17;
let altura = 1.75;
let estudante = true;

console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Altura:', altura);
console.log('Estudante:', estudante);

// Constantes não podem mudar de valor
const PI = 3.14;
console.log('Valor de PI:', PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; // soma
let y = '5' + '5'; // concatenação de strings
let z = 'Hello' + 5; // concatenação de string e número

console.log('Soma:');
console.log('x:', x);
console.log('y:', y);
console.log('z:', z);

console.log(typeof x)

// Operadores relacionais > < >= <= == != === !==
console.log('5' == 5); // true, comparação de valor
console.log('5' === 5); // false, comparação de valor e tipo
console.log('5' != 5); // false, comparação de valor
console.log('5' !== 5); // true, comparação de valor e tipo

// Operadores de incremento
x = x++;
console.log(x);

x = ++x;
console.log(x);