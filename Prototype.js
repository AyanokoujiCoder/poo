function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

// Esto es algo muy especial y unico en JavaScript porque trabaja 
// con herencias de prototipo y no herencias clasicas. 

// Estos prototipos son basicamente mecanismos que permiten la herencia 
// de javascript, es decir un objeto hereda de otro objeto y al final 
// todos los objetos en JavaScript heredan del objeto llamada Object

Auto.prototype.info = function() {
    return this.modelo + " - " + this.marca + " - " + this.año;
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());