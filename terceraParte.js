//TODO Crear una función similar a la del ejercicio, utilizando esta vez un objeto con
//TODO características de algún animal, que contenga, al menos, cinco pares de llave - valor.
//TODO Utilizar template literals para escribir un texto empleando los valores del objeto, y
//TODO Destructuring para definir los valores del objeto dentro de la función.

const animalHatsumomo = {
	nombre: "핫쓰모모",
	tipo: "gato",
	raza: "chilena",
	patas: "4",
	edad: "5",
	comida: "bravery",
};


//TODO Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread
//TODO operator; actualizar dos campos, y añadir dos nuevos.

const describeAnimal = ({ nombre, tipo, raza, patas, edad, comida }) => {
	const descripcion = `\nEl animal ${nombre} es un ${tipo} de raza ${raza}. Actualmente se desplaza en ${patas} patas, 
    pero espera que pronto su situación mejore a sus ${edad} años de edad. Consume de manera frecuente ${comida} de gatos.\n`;
	console.log(descripcion);
};

describeAnimal(animalHatsumomo);

//TODO Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y
//TODO luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array.

const animalHatsumomoActualizado = {...animalHatsumomo, edad: '6',comida: 'bravery y wiskas', colaGatuna: true, rayas: 'muchas'};

array핫쓰모모 = Object.values(animalHatsumomoActualizado);

for(atributos of array핫쓰모모) {
    console.log(atributos);
}




