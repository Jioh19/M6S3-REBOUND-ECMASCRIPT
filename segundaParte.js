//TODO Crear una función utilizando el formato tradicional con la palabra clave function, y luego
//TODO volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración
//TODO dentro de una variable. La función debe recibir, al menos, dos argumentos.

//* Función que hace calculos random y entrega un arreglo
function funcional(movx, movy, direccion) {
    return ([Number(Math.sqrt(movx*movx+movy*movy).toPrecision(4)), -direccion]);
}

//* Función flecha que hace lo mismo de arriba
let funcional2 = (movx, movy, direccion) => [Number(Math.sqrt(movx * movx + movy * movy).toPrecision(4)), -direccion];

console.log(funcional(3, 40, 7));
console.log(funcional2(3,40,7));