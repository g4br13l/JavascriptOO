/**
 * Created by gabriel.lima on 19/11/2015.
 */

/** - Criação de Objetos e Propriedades simples
 *  - Chamadas a propriedades
 */

// Criação de um objeto "Cor"
var Cor = new Object();


// Ou o objeto "Cor" pode ser criado assim
var Cor = {
    vermelho: 'Red',
    verde: 'Green',
    azul: 'Blue'
};

console.log(Cor.verde);

Cor.amarelo = 'Yellow';// Criando a propriedade "amarelo" no objeto e setando o valor "amarelo"
console.log(Cor.amarelo);