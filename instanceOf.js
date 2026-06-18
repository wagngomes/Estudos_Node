const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);

// O operador instanceof é usado para verificar se um objeto é uma instância de uma função construtora ou de uma classe. 
// Ele retorna true se o objeto for uma instância da função construtora ou da classe, e false caso contrário. 
// O operador instanceof é útil para verificar o tipo de um objeto
//  e para garantir que ele tenha as propriedades e métodos esperados.

console.log(typeof date);

const _instanceof = function(obj, fn) {

    if (obj === null) return false;
    if (obj.__proto__ === fn.prototype) return true;

    return _instanceof(obj.__proto__, fn)

}

//Aqui estamos criando uma função chamada _instanceof que recebe um objeto e uma função construtora como parâmetros.
// A função _instanceof verifica se o objeto é uma instância da função construtora, 
// ou seja, se o protótipo do objeto é igual ao protótipo da função construtora.

console.log(_instanceof(date, Date));
console.log(_instanceof(date, Object));
console.log(_instanceof(date, Array));