const retangle = {
    x: 10,
    y: 20,
    calculateArea(){
        return this.x * this.y
    }
}
console.log(retangle.calculateArea())

//O this se refere ao objeto que está chamando a função, ou seja, no exemplo acima,
// o this se refere ao objeto retangle. 
// Se a função fosse chamada fora do objeto, o this se referiria ao objeto global, 
// que no caso do JavaScript é o window no navegador ou global no Node.js.

const retangle_x = {
    x: 100,
    y: 200,
    get Area(){
        return this.x * this.y
    }
}
console.log(retangle_x.Area)

//O get é uma forma de criar uma propriedade calculada, ou seja, 
// uma propriedade que é calculada a partir de outras propriedades do objeto. 
// No exemplo acima, a propriedade Area é calculada a partir das propriedades x e y. 
// O get permite que a propriedade seja acessada como se fosse uma propriedade normal, 
// sem a necessidade de chamar uma função.

const retangle_xx = {
    set x(x){

        if(x > 0){
            this._x = x
        }else{
            console.log('Valor inválido')
        }       

    },
    set y(y){

        if(y > 0){
            this._y = y
        }else{
            console.log('Valor inválido')
        }
    },
        
    get Area(){
        return this._x * this._y
    }
}
retangle_xx.x = 300
retangle_xx.y = 300
console.log(retangle_xx.Area)

//O set é uma forma de criar uma propriedade que pode ser modificada, ou seja,
// uma propriedade que pode ser atribuída a um valor. 
// No exemplo acima, as propriedades x e y são criadas como setters,