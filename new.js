let auto1 = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

let auto2 = {
    modelo: 'Hummer EV',
    año: 2022,
    marca: 'GMC'
};

// Cuando creas una clase es una buena idea empezar siempre con mayuscula y es una buena practica.
function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

// En vez de utilizar mas lineas de codigo solo utilizamos una poniendo el new, 
// tiene mas informacion detras de escena, esto nos ayuda a trabajar mucho mas rapido con codigo.

console.log(new Auto('Modelo 3', 2021, 'Tesla'));
console.log(new Auto('Hummer EV', 2022, 'GMC'));