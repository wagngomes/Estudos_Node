const obj1 = {
    p1: 10,
    getp1(){
        return this.p1
    }
}

console.log(obj1.getp1())

const obj2 = {
    p2: 10,
    getp2(){
        const fn = function(){
            return this.p2
        }
        return fn()
    }
}

console.log(obj2.getp2()) // Output: undefined

// No exemplo acima, a função getp2 é definida como uma função comum, e o valor de this dentro da função não se refere ao objeto obj2, 
// mas sim ao contexto global, onde p2 é undefined, resultando em undefined. 
// Por isso, é importante ter cuidado ao usar funções comuns em objetos, 
// pois elas podem não se comportar como esperado quando se trata do valor de this.

const obj3 = {
    p3: 10,
    getp3(){
        that = this
        const fn = function(){
            return that.p3
        }
        return fn()
    }
}
console.log(obj3.getp3()) // Output: 10

// No exemplo acima, a função getp3 é definida como uma função comum, mas antes de definir a função fn, 
// a variável that é atribuída ao valor de this, que se refere ao objeto obj3. 
// Dessa forma, dentro da função fn, o valor de that se refere ao objeto obj3, 
// e a função retorna o valor de p3 corretamente. 
// Essa é uma técnica comum para lidar com o valor de this em funções comuns, 
// onde a variável that é usada para armazenar o valor de this 
// e garantir que ele seja acessível dentro da função.

const obj4 = {
    p4: 1000,
    getp4(){
        const fn = () => {
            return this.p4
        }
        return fn()
    }
}
console.log(obj4.getp4()) // Output: 1000

// No exemplo acima, a função getp4 é definida como uma função comum, 
// mas a função fn é definida como uma arrow function. 
// O valor de this dentro da função fn se refere ao contexto global, 
// onde p4 é undefined, resultando em undefined. 
// Por isso, é importante ter cuidado ao usar arrow functions em objetos, 
// pois elas podem não se comportar como esperado quando se trata do valor de this.