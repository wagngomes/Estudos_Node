const sum =  function(a, b) {
    return a + b;
}

//Nas arrow functions, a palavra-chave function é substituída por uma seta (=>) e a sintaxe é mais concisa. 
//As arrow functions não possuem seu próprio this, ou seja, o valor de this dentro de uma arrow function 
// é determinado pelo contexto em que ela foi definida, e não pelo contexto em que ela é chamada. 
//Isso significa que as arrow functions são úteis para 
// evitar problemas com o valor de this em funções de callback ou funções anônimas.

const sumArrow = (a, b) => a + b;

// Na arrow function, se houver apenas um parâmetro, os parênteses podem ser omitidos, e se houver apenas uma expressão, as chaves e a palavra-chave return também podem ser omitidos. 
// As arrow functions são úteis para escrever funções de forma mais concisa e legível, 
// especialmente quando se trata de funções de callback ou funções anônimas.

console.log(sum(2, 3)); // Output: 5
console.log(sumArrow(2, 3)); // Output: 5

const imprime = texto => console.log(texto);

imprime("Hello, World!"); // Output: Hello, World!


const person = {
    name: 'Alice',
    city: 'New York',
    year: 1990,
    getAge() {
        return new Date().getFullYear() - this.year;
    }
}

console.log(person.getAge()); // Output: 33 (considerando o ano atual como 2023)

const person2 = {
    name: 'Bob',
    city: 'Los Angeles',
    year: 1985,
    getAge: () => new Date().getFullYear() - this.year
}

console.log(person2.getAge()); // Output: NaN

// No exemplo acima, a função getAge é definida como uma arrow function, e o valor de this dentro da função não se refere ao objeto person2, 
// mas sim ao contexto global, onde year é undefined, resultando em NaN. 
// Por isso, é importante ter cuidado ao usar arrow functions em objetos, 
// pois elas podem não se comportar como esperado quando se trata do valor de this.

const sum_arg = function () {
    total = 0;

    for (argument in arguments){
        total += arguments[argument]
    }

    return total
}

console.log(sum_arg(1, 2, 3)); // Output: 0

const sum_arg_arr = () => {
    total = 0;

    for (argument in arguments){
        total += arguments[argument]
    }

    return total
}

console.log(sum_arg_arr(1, 2, 3)); // Output: 0

// As arrow functions não possuem a variável arguments, 
// que é uma variável local disponível em todas as funções comuns 
// e que contém os argumentos passados para a função. 
// Por isso, ao tentar acessar arguments dentro de uma arrow function, ele não estará definido, 
// resultando em um erro ou comportamento inesperado. 
// Se você precisar acessar os argumentos passados para uma arrow function, 
// pode usar o operador rest (...) para coletar os argumentos em um array. 

const autor = (name, city, year) => {name, city, year}
console.log(autor('Alice', 'New York', 1990)); // Output: undefined

const autor2 = (name, city, year) => ({name, city, year})
console.log(autor2('Alice', 'New York', 1990)); // Output: { name: 'Alice', city: 'New York', year: 1990 }  

// No exemplo acima, a função autor é definida como uma arrow function que retorna um objeto.
// No entanto, como a função não possui chaves, 
// o JavaScript interpreta o corpo da função como uma expressão e não como um bloco de código. 
// Como resultado, a função retorna undefined em vez do objeto esperado.