//TODO Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción
//TODO de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea
//TODO porque la definición es al interior de una función, de un bloque o fuera de ellos.

//* Esta función lanzará error por:
//* Cambiar el valor de una constante
//* Invocar la constante fuera de alcance por bloque
const constante = () => {
	{
		const consting = "a";
        consting = "b"
	}
    console.log("consting: ", consting);
};

//* Esta función lanzará error por:
//* Redeclarar una variable ya declarada
//* Invocar la constante fuera de alcance por bloque
function leteante() {
    {
        let leting = "let";
       // let leting = 'abc';
    }
    console.log("leting: ", leting);
}

//* Esta función no lanza error.
//* Basicamente al var no le importan mucho las cosas
var variable = function() {
    {
        var varing = "var";
        var varing = "able";
    }
    console.log("varing: ", varing);
}
//* Solo aca da error al no estar definida la variable "varing"
//* fuera de la función
console.log(varing);