const createPerson = function(name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return new Date().getFullYear() - this.year;
        }
    }
}

const person1 = createPerson('Alice', 'New York', 1990);
console.log(person1);
const person2 = createPerson('Bob', 'Los Angeles', 1985);
console.log(person2);



const personPrototype = {
    getAge() {
        return new Date().getFullYear() - this.year;
    }
}

const createPersonWithPrototype = function(name, city, year) {
    const person = {
        name,
        city,
        year
    }
    Object.setPrototypeOf(person, personPrototype);
    return person;
}

const person3 = createPersonWithPrototype('Charlie', 'Chicago', 1995);
console.log(person3);
console.log("proto:", person3.__proto__);



//Agora veremos isso atraves da função contrutora que retorna um novo objeto usando a palavra-chave new,
// e o this dentro da função construtora se refere ao objeto que está sendo criado.

//Por convenção, as funções construtoras são nomeadas com a primeira letra maiúscula para diferenciá-las
//  das funções comuns.

const Person = function(name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
    this.getAge = function() {
        return new Date().getFullYear() - this.year;
    }
}

//Toda funçãom construtora tem uma propriedade chamada prototype,
// que é um objeto que contém as propriedades
// e métodos que serão compartilhados por todas as instâncias criadas a partir da função construtora.

const Person_ex = function(name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
}

Person_ex.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
}


const _new = function (fn, ...args) {
    const obj = {}
    fn.apply(obj, args);
    Object.setPrototypeOf(obj, fn.prototype);
    return obj;
}

const person4 = _new(Person, 'Dave', 'Miami', 1980);
console.log(person4);
console.log("proto:", person4.__proto__);

//Aqui implementamos a função _new, que simula o comportamento da palavra-chave new.
// A função _new recebe como parâmetros a função construtora (fn) e os argumentos (...args) que serão passados para a função construtora.
// Dentro da função _new, criamos um objeto vazio (obj) e chamamos a função construtora usando o método apply, passando o objeto como contexto (this) e os argumentos como um array.
// Em seguida, definimos o protótipo do objeto criado para ser o protótipo da função construtora, usando o método Object.setPrototypeOf.
// Por fim, retornamos o objeto criado.