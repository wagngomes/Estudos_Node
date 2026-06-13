
//function declaration

function sum(a, b){
    return a + b
}

console.log(sum(5, 10))

//function expression  

const sum2 = function(a, b){
    return a + b
}

//Na function declaration ela é pré-carregada, ou seja, 
// pode ser chamada antes de ser declarada. 
// Já a function expression só pode ser chamada depois de ser declarada.

const calculator = function() {
    return function(){
        return console.log('Hello world')
    }
}

console.log(calculator()())

const calculator_x = function(fn) {
    return function(a, b){
        return fn(a, b)
    }
}

console.log(calculator_x(sum)(5, 10))

//arguments é um objeto array-like, ou seja, tem a propriedade length 
// e pode ser acessado por índices, mas não tem os métodos de array como map, 
// filter, etc.

const substract = function(){
    return console.log(arguments)
}

console.log(substract(1,3,5,7,9))

const substract_x = function(){
   let total = 0
   for( let argument in arguments){
    total += arguments[argument]
}
 return total
}

console.log(substract_x(1,3,5,7,9))

//rest operator ...args é uma forma mais moderna de lidar com um 
// número variável de argumentos.
// Ele transforma os argumentos em um array real, 
// permitindo o uso de métodos de array como map, filter, etc.
//Deve ser o último parâmetro da função, ou seja, 
// não pode haver mais parâmetros depois dele.

const sum_x_rest = function(...args){
   let total = 0
   for( let argument of args){
    total += argument
}
 return total
}

console.log(sum_x_rest(1,3,5,7,9))