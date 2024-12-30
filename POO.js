// Cuando estamos trabajando en un proyecto talvez trabajas con muchisimos datos 
// de diferente tipo, en este ejemplo simplemente estamos viendo autospero tu puedes 
// trabajar con cualquier tipo de objeto del mundo real y traducirlo en codigo 
// y es lo que le llaman programacion orientada a objetos "POO"

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

let servicio = {
    nombre: 'Trsndforma modelos a mayúsculas',
    transformar: function(auto) {
        auto.modelo = auto.modelo.toUpperCase()
    }
};

servicio.transformar(auto2);
console.log(auto2);