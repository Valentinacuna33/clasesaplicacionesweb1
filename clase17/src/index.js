// // Funciones

// //Declaración
// function suma(a, b) {
//     return a + b;
// }
// const resultado = suma(2,3)
// console.log(resultado)

// const modulo = function (a, b){
//     return a%b
// }


// // Flecha o FatArrow

// const resta =(a,b)=>{
//     return a - b;
// }
// const multiplicar = (a, b) => a * b;

// const dividirPor2= a=> a / 2

// const saludo = ()=> 'Hola'
// resultado = resta(5,2)
// console.log(resultado) 


// //CallBack
 const b = (cb) =>{
     cb()
 } 
//funcion a pasar como argumento de b
const cb = ()=>{
    console.log('se ejecuto el cb')
}
b (cb)




