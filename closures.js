const v1 = 10
function fn1() {

    function fn2() {
        console.log(v1)
    }
    fn2()
}
fn1()

//Como as funções são de primeira classe , em determinadas situações 
//isso pode gerar ambiguidades, como por exemplo, quando uma função é
// passada como parâmetro para outra função.
//Para resolver esses tipo de problema foram criadas as closures, 
// que são funções que possuem acesso ao escopo léxico, ou seja, 
// a função interna tem acesso às variáveis da função externa mesmo 
// após a execução da função externa ter sido concluída.

function fnc1(){
    const t1 = 1000;
    return function(){
        console.log(t1)
    }
}

const fnc2 = fnc1()
const t1 = 2000;
fnc2() // 1000

//O que acontece é que a função interna (closure) mantém uma 
// referência ao escopo léxico da função externa,
// mesmo após a execução da função externa ter sido concluída.
//Isso porque elas tem scope chain estático, que é defunido no 
// momento da criação da função, e não no momento da execução.  

const h1 = 15;
function fnh1() {
    console.log(h1)
}

function fnh2(fnh1) {
    const h1 = 20;
    fnh1()
}
fnh2(fnh1) // 15  

//O que acontece é que a função fnh1() mantém uma referência 
// ao escopo léxico da função fnh1() mesmo após a execução da função 
// fnh2() ter sido concluída. 
//Isso porque elas tem scope chain estático, 
// que é defunido no momento da criação da função, 
// e não no momento da execução.  

//Apesar de estático, o scope chain faz referência a objetos 
//que estão na memória e que podem ser compartilhados 
// por mais de uma função, ou seja, o scope chain é dinâmico.

const x1 = 10;

function fk1() {

    let x1 = 20;
    return {
        m1() {

            console.log(++x1)

        },
        m2() {
            console.log(--x1)
            
        }
    }
}

const obj1 = fk1()
obj1.m1() // 21
obj1.m1() // 22
obj1.m2() // 21
obj1.m2() // 20

/*
const objto1 = {}

for( var y1 = 0; y1 < 3; y1++ ) {
    
    objto1[y1] = (function(y2){
        return function() {
        console.log(y2)
    }
    })(y1)   
}
objto1[0]()
objto1[1]()
objto1[2]()

*/

//Aqui só foi possível a saídas 0,1,2 porque foio criado um escopo intermediário 

const objto1 = {}

for( var y1 = 0; y1 < 3; y1++ ) {
    
    objto1[y1] = (function(){
        console.log(this.y2)
    }).bind({y2: y1})
}
objto1[0]()
objto1[1]()
objto1[2]()

//Aqui tivemos outra abordagem com this ee bind para travar o escopo 