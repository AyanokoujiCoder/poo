// function Padre(nombre, apellido, soy) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.soy = soy;
// }

// Padre.prototype.saludo = function() {
//     console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
// }

class Padre {
    constructor(nombre, apellido, soy) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.soy = soy;
    }
    saludo() {
        console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`)
    }
}

// function Hijo(nombre, apellido, soy, tengo) {
//     Padre.call(this, nombre, apellido, soy);
//     this.tengo = tengo;
// }

// extends Padre: Esta palabra clave indica que la clase Hijo es una subclase de Padre. 
// Esto significa que Hijo hereda todas las propiedades y métodos de Padre.

// El método super():

// La palabra clave super se utiliza para llamar al constructor de la superclase desde el constructor de la subclase.
// Esto es necesario porque cuando se utiliza extends, la subclase hereda todas las propiedades y métodos de la superclase, 
// y la llamada a super() inicializa las propiedades de la superclase en el contexto de la subclase.

// El uso de super() permite a la subclase (Hijo) aprovechar la funcionalidad de la superclase (Padre) 
// mientras agrega o modifica su propio comportamiento.

class Hijo extends Padre {
    constructor(nombre, apellido, soy, tengo){
        super(nombre, apellido, soy);
        this.tengo = tengo;
    }

    saludoHijo() {
        console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);
    }
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

// Otro ejemplo:

// class Animal {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
  
//   hablar() {
//     console.log(`${this.nombre} hace un sonido.`);
//   }
// }

// class Perro extends Animal {  
//   hablar() {
//     console.log(`${this.nombre} ladra.`);
//   }
// }

// const miPerro = new Perro("Buddy");
// miPerro.hablar();  // Salida: Buddy ladra.