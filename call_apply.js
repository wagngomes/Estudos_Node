function calculateArea(){
    return Math.PI * (Math.pow(this.radius, 2))
}

const circle = {
    radius: 10,
    calculateArea
}

console.log(calculateArea.call(circle))
console.log(calculateArea.apply(circle))

const calculateArea_ = function (fn){
    return fn(Math.PI * Math.pow(this.radius, 2))
}

console.log(calculateArea_.call(circle, Math.round))
console.log(calculateArea_.apply(circle, [Math.ceil]))

// A diferença entre call e apply é a forma como os argumentos são passados.
// No call, os argumentos são passados individualmente, ou seja, 
// cada argumento é passado como um parâmetro separado. 
// Já no apply, os argumentos são passados como um array, ou seja, 
// todos os argumentos são passados dentro de um array.

// O call e o apply são métodos que permitem que uma função seja chamada com um determinado valor de this,
// ou seja, eles permitem que o contexto de execução da função seja alterado. 
// O call e o apply são úteis quando queremos usar uma função em um contexto diferente do que ela foi definida, 
// ou seja, quando queremos usar uma função em um objeto diferente do que ela foi definida.

const calculateAreaForCircle = calculateArea_.bind(circle)
console.log(calculateAreaForCircle(Math.round))

// O bind é um método que retorna uma nova função com um determinado valor de this,
// ou seja, ele permite que o contexto de execução da função seja alterado, 
// mas ao contrário do call e do apply, o bind não chama a função imediatamente, 
// ele retorna uma nova função que pode ser chamada posteriormente.