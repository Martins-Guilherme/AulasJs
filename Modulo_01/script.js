/*

ARROW FUNCTIONS

Quando uma função possuir apenas uma expressão
a sua sintaxe pode ser ainda mais simples.
 Veja como ficaria o exemplo:

*/


/*Caso você queira extrair apenas os nomes do array 'cores'

Exemplo 1: utilizando um laço foreach
 forEach = para cada
*/

var cores = [
	{ id: 1, nome: 'Amarelo' },
	{ id: 2, nome: 'Verde' },
	{ id: 3, nome: 'Azul' },
	{ id: 4, nome: 'Branco' },
	{ id: 5, nome: 'Preto' }
	];


//Criando um novo array para receber os nomes
var nomesCores = [];

//Percorrendo o array cores e atribuindo ao novo array os nomes
cores.forEach(function (cor) {
	nomesCores.push(cor.nome);
});
console.log(nomesCores); //imprimirá ["Amarelo", "Verde", "Azul", "Branco", "Preto"]



//Exemplo 2: utilizando arrow function

const coresNomes = cores.map(cor => cor.nome);

console.log("Arrow functions :\n",coresNomes); //imprimirá ["Amarelo", "Verde", "Azul", "Branco", "Preto"]




/*
			Script da pagina eventos
*/


function tex_invi(){
	var eP = document.getElementById("texto_escondido");
	eP.style.display = "none";
}
var hP = document.getElementById("titulo");

hP.onclick = function(){
document.getElementById("texto_escondido").style.display = "block";
}
