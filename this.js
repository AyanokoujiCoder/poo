// La palabra clave this se utiliza para referirse al contexto en el que 
// una función se ejecuta. En el contexto de un objeto, como en tu ejemplo, 
// this hace referencia al propio objeto desde el cual se está llamando el método.

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: function() {
        return 'Este es un auto ' + this.marca
        + ', ' + this.modelo + ' del año ' + this.año;
    }
};

console.log(auto.marca);
console.log(auto.info());

// Uso de this dentro del método info:

// Dentro del método info, this se refiere al objeto auto al que pertenece el método.
// Por lo tanto, this.marca es equivalente a auto.marca, this.modelo es equivalente 
// a auto.modelo, y this.año es equivalente a auto.año.
// Esto permite acceder a las propiedades del objeto auto dentro de su propio método.

// ¿Por qué usar this?
// Flexibilidad: El uso de this permite que el método sea reutilizable para diferentes 
// objetos. Si copiaras el método info a otro objeto, seguiría funcionando correctamente 
// porque this se ajusta al objeto que llama al método.