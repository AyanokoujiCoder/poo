// Las clases son azucar sintactica para crear plantillas para crear objetos. 
// Azucar sintactica significa crear una sintaxis que sea mas simple de entender mas 
// facil y que evite escribir tanto codigo remplazando este script con otra mas moderna. 

// function Auto(modelo, año, marca) {
//     this.modelo = modelo;
//     this.año = año;
//     this.marca = marca;
// }

// Auto.prototype.info = function() {
//     return this.modelo + " - " + this.marca + " - " + this.año;
// }

// El constructor es una funcion que es llamada cuando instanciamos un objeto de una clase
class Auto {
    constructor(modelo, año, marca){
        this.modelo = modelo;
        this.año = año;
        this.marca = marca;
    }

    info() {
        return this.modelo + " - " + this.marca + " - " + this.año;
    }
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());

// Obtenemos exactamente el mismo resultado.

// Crea la clase 'Canal' para la cual debes construir un objeto utilizando el método constructor(), 
// tu objeto debe de tener las propiedades 'canal', 'tipo' 'espectadores', 'url', crea el método 'ir' 
// que imprime la url en la consola, con const guarda tu nuevo objeto con el nombre 'canal' utilizando 
// la clase y pasando los valores 'RollingStone', 'Music', 1432 y 'https://www.twitch.tv/rollingstone' 
// respectivamente llama el método ir del objeto instanciado.

// class Canal {
//     constructor(canal, tipo, espectadores, url) {
//         this.canal = canal;
//         this.tipo = tipo;
//         this.espectadores = espectadores;
//         this.url = url;
//     }
    
// ir() {
//     console.log(this.url);
//     }
// }

// const canal = new Canal('RollingStone', 'Music', 1432,'https://www.twitch.tv/rollingstone' );
// canal.ir();