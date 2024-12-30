// Si comvertimos esto en una funcion flecha vamos a ver algo muy distinto 
// function info() {
// Si pongo una propiedad en el ambito global...
this.marca = 3;

const info = () => {
    console.log(this);
}

// This es vacio porque se refiere al ambito global {}

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: info
};

auto.info();