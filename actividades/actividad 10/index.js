console.log('===== 1. CONDICIONALES =====');
 
console.log('--- 1.1 Mayor de edad ---');
 
const edad = 20;
 
if (edad >= 18) {
  console.log('Es mayor de edad');
} else {
  console.log('Es menor de edad');
}
 
 console.log('--- 1.2 Par o impar ---');
 
const numero = 7;
 
if (numero % 2 === 0) {
  console.log('El número es par');
} else {
  console.log('El número es impar');
}
  
console.log('--- 1.3 Calificación ---');
 
const nota = 8;
 
if (nota < 4) {
  console.log('Reprobado');
} else if (nota <= 7) {
  console.log('Aprobado');
} else {
  console.log('Excelente');
}
 
console.log('===== 2. BUCLES =====');
 
console.log('--- 2.1 Del 1 al 10 ---');
 
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 
console.log('--- 2.2 Del 10 al 1 ---');
 
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
 
 console.log('--- 2.3 Par o impar en el bucle ---');
 
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log('El número es par');
  } else {
    console.log('El número es impar');
  }
}
 
console.log('--- 2.4 Par o impar con template literals ---');
 
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}