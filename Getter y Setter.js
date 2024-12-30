// const objeto = {
//     a: 10,
//     get b() {
//         return this.a;
//     },
//     set b(x) {
//         this.a = x;
//     }
// };

// Getter y Setter es un tema más avanzado y no muy común en la práctica pero te permite 
// llamar métodos como propiedades. Para esto usamos la palabras reservadas get y set.

// get significa obtener y set significa establecer.

// get te permite llamar un método personalizado que está vinculado a un objeto al leerlo como propiedad.

// set te permite llamar un método personalizado que está vinculado al objeto al modificarlo como propiedad.

let persona = {
    _nombre: '', // Propiedad privada para almacenar el nombre
    _edad: 0,    // Propiedad privada para almacenar la edad

    // Getter para obtener los datos de la persona
    get datos() {
        return this._nombre + ' ' + this._edad;
    },

    // Setter para establecer los datos de la persona
    set datos(valor) {
        const splitValor = valor.split(' '); // Divide el valor por el espacio para separar nombre y edad
        this._nombre = splitValor[0];        // Asigna la primera parte al nombre
        this._edad = splitValor[1];          // Asigna la segunda parte a la edad
    }
};

// Ejemplo de uso del getter y setter
persona.datos = 'Juan 30'; // Uso del setter para establecer nombre y edad
console.log(persona.datos); // Uso del getter para obtener el nombre y la edad; imprime "Juan 30"

const objeto = {
    a: 10,
    get b() {
      return this.a;
    },
    set b(x) {
      this.a = x;
    }
  };
  
  console.log(objeto.b); // leo b como si fuera una propiedad y retorna 10
  objeto.b = 20; // modifico b como si fuera una propiedad
  console.log(objeto.a) // ahora a es 20