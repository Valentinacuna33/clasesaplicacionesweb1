console.log('===== 1. FUNCIONES DE DECLARACIÓN =====');
 
// Sin retorno de valor: saludar
console.log('--- 1.1 Sin retorno de valor: saludar ---');
 
function saludar() {
  console.log('¡Hola, bienvenido!');
}
 
saludar();
 
// Sin retorno de valor: saludarPersona
console.log('--- 1.2 Sin retorno de valor: saludarPersona ---');
 
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}
 
saludarPersona('Andrés');
saludarPersona('Valentín');
 
// Retorno de valor: esMayorDeEdad
console.log('--- 1.3 Retorno de valor: esMayorDeEdad ---');
 
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
 
const resultadoMayor = esMayorDeEdad(20);
const resultadoMenor = esMayorDeEdad(15);
 
console.log(resultadoMayor);
console.log(resultadoMenor);
 
 
/* 
   FUNCIONES DE FLECHA
    */
 
console.log('===== 2. FUNCIONES DE FLECHA =====');
 
// esMayorDeEdad como función flecha
console.log('--- 2.1 esMayorDeEdad como función flecha ---');
 
const esMayorDeEdadFlecha = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};
 
const resultadoFlechaMayor = esMayorDeEdadFlecha(30);
const resultadoFlechaMenor = esMayorDeEdadFlecha(12);
 
console.log(resultadoFlechaMayor);
console.log(resultadoFlechaMenor);
 
// Comparar dos números dentro de un bucle
console.log('--- 2.2 Comparar dos números dentro de un bucle ---');
 
const compararNumeros = (numero, numeroComparado) => {
  if (numero < numeroComparado) {
    console.log(`El número ${numero} es menor que ${numeroComparado}`);
  } else if (numero === numeroComparado) {
    console.log(`El número ${numero} es igual que ${numeroComparado}`);
  } else {
    console.log(`El número ${numero} es mayor que ${numeroComparado}`);
  }
};
 
for (let i = 0; i <= 10; i++) {
  compararNumeros(i, 5);
}
 
 
/* 
   FUNCIONES CALLBACK
    */
 
console.log('===== 3. FUNCIONES CALLBACK =====');
 
//operacion con callbacks suma y resta
console.log('--- 3.1 operacion con callbacks suma y resta ---');
 
function suma(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(`El resultado de la suma es ${resultado}`);
}
 
function resta(numero1, numero2) {
  const resultado = numero1 - numero2;
  console.log(`El resultado de la resta es ${resultado}`);
}
 
const operacion = (numero1, numero2, callback) => {
  callback(numero1, numero2);
};
 
operacion(10, 4, suma);
operacion(10, 4, resta);
 
//  operacion validando que sean números
console.log('--- 3.2 operacion validando que sean números ---');
 
const operacionValidada = (numero1, numero2, callback) => {
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    callback(numero1, numero2);
  } else {
    console.log('Debe ingresar solo números.');
  }
};
 
operacionValidada(8, 3, suma);
operacionValidada(8, 3, resta);
operacionValidada('8', 3, suma);
operacionValidada(8, 'hola', resta);
 
