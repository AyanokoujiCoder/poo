function Padre(nombre, apellido, soy) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
}

Padre.prototype.saludo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
}

function Hijo(nombre, apellido, soy, tengo) {
    Padre.call(this, nombre, apellido, soy);
    this.tengo = tengo;
}

// Hacemos que Hijo.prototype herede de Padre.prototype
Hijo.prototype = Padre.prototype;
Hijo.prototype.saludoHijo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);
}
const padre = new Padre('Ramón Antonio Gerardo', 'Estévez', 'el padre');
const hijo = new Hijo('Carlos Irwin', padre.apellido, 'el hijo', 55);

// console.log(padre);
// console.log(hijo);

padre.saludo();
hijo.saludoHijo();

// Soy Ramón Antonio Gerardo Estevéz y soy el padre
// Soy Carlos Irwin Estévez y soy el hijo y tengo 55 años

// Problemas y Mejoras: El problema principal de este código es que tanto Padre.prototype como Hijo.
// prototype están referenciando el mismo objeto. Una mejora sería usar Object.create() 
// para que Hijo herede de Padre sin compartir el mismo prototipo. Así, los métodos 
// específicos de Hijo no se agregarán accidentalmente a Padre.

// Hijo.prototype = Object.create(Padre.prototype);
// Hijo.prototype.constructor = Hijo; // Restablecemos el constructor de Hijo

// Hijo.prototype.saludoHijo = function() {
//     console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);
// };