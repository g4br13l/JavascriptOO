/**
 * Created by gabriel.lima on 19/11/2015.
 */

/** - Criação de classe com o objeto function do javascript
 *  - Passando argumentos para o objeto function do javascript na criação da classe
 *  - Modificadores de acessos (privado ou publico)
 *  - Cuidados com o contexto this do javascript
 *  - Criação e chamada a metodos
 */

var pessoa = function (argNome) {

    var self = this;                        // Atribuimos a propriedade self o ponteiro atual de this. Boa prática sempre usar self
    var nomePrivado = argNome;
    this.nomePublico = argNome;

    this.intervaloThis = function () {                          // Função aninhada que exibe o nome a cada 2 segundos
        setInterval(function () {                               // Perda do contexto this. Esse this se referencia a function dessa linha
            console.log('intervaloThis: ' + this.nomePublico);  // Resultado -> Undefined
        }, 3000)
    };

    self.intervaloSelf = function () {                          // Função aninhada que exibe o nome a cada 3 segundos
        setInterval(function () {                               // O contexto de this continua funcionando e referenciando a classe pessoa
            console.log('intervaloSelf: ' + self.nomePublico);    // Resultado -> Gabriel Lima
        }, 3000)
    };
};

var gabriel = new pessoa('Gabriel Lima');
console.log('privado: '+ gabriel.nomePrivado); // resultado -> Undefined
console.log('publico: '+ gabriel.nomePublico); // resultado -> Gabriel Lima

gabriel.intervaloThis();    // chamada de um metodo
gabriel.intervaloSelf();    // chamada de um metodo
