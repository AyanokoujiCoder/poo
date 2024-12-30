// Vinculación implícita: el método obtiene acceso al contexto 
// automáticamente desde un objeto, una función regular, o una clase.

// Vinculación explícita: la función obtiene acceso al contexto que 
// le demos usando los métodos call, apply y bind.

// No podemos usar los métodos call, apply y bind en las funciones de 
// flecha para cambiar el valor de this, porque las funciones de flecha 
// no tienen su propio contexto this.

function info() {
    console.log(this);
}

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

// Estos son metodos de las funciones: bind, call, apply

// La diferencia entre bind y call es que bind no corre la funcion 
// al menos que nosotros la corramos y la otra solo la invoca.

info.bind(auto)();

// function info(a) {
//     console.log(this, a);
// }

// let auto = {
//     modelo: 'Modelo 3',
//     año: 2021,
//     marca: 'Tesla'
// };

// info.call(auto, 10, 20);

// Otra forma de vincular y llamar esta funcion es utilizando Apply
// con la diferencia en que pasamos los argumentos en un Array []

// info.apply(auto, [10, 20]);

// Esto puede ser una herramienta util si es que quieres tener metodos 
// y quieres llamarlos sobre diferentes objetos 

// function suma(a, b) { return a + b; }
// function sumarConCall(num1, num2) { return suma.call(null, num1, num2); }
// function sumarConApply(num1, num2) { return suma.apply(null, [num1, num2]); }
// function sumarConBind(num1, num2) { return suma.bind(null, num1, num2)(); }