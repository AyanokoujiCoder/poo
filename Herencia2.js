// Este es otro ejemplo para reforzar tus conocimientos:

function Animal(nombre) {
    this.nombre = nombre;
 }
 
 // creo un método para Animal
 Animal.prototype.obtenerNombre = function() {
     return this.nombre;
 }
 
 function Mamifero(nombre, tienePelo) {
     // hereda la propiedad nombre de Animal
     Animal.call(this, nombre);
     this.tienePelo = tienePelo;
 }
 // hereda los métodos de Animal
 Mamifero.prototype = Object.create(Animal.prototype);
 
 // creo un método para Mamifero
 Mamifero.prototype.obtenerTienePelo = function() {
     return this.tienePelo;
 }
 
 function Perro(nombre, raza) {
     // hereda la propiedad nombre de Mamīfero
     Mamifero.call(this, nombre, true);
     this.raza = raza;
 }
 
 // hereda los métodos de Mamifero
 Perro.prototype = Object.create(Mamifero.prototype);
 
 // creo un método para Perro
 Perro.prototype.obtenerRaza = function() {
     return this.raza;
 }
 
 var firulais = new Perro('Firulais', 'Labrador');
 
 console.log(firulais.obtenerNombre());  // 'Firulais'
 console.log(firulais.obtenerTienePelo()); // true
 console.log(firulais.obtenerRaza()); // 'Labrador'

//  Crea un objeto 'perro' con un método 'ladra' que imprima 'guau' en la consola. 
//  'perro'se debe crear a partir de una clase funcional 'Perro'. Asegúrate que 'Perro' 
//  herede de la clase 'Animal' y llama a su método 'ladra' al final.

 function Animal() {

 }
 
 function Perro() {
 
 }
 Perro.prototype = new Animal();
 
 Perro.prototype.ladra =
 function() {
 console.log('guau');
 };
 
 const perro = new Perro();
 perro.ladra();