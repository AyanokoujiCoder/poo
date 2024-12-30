class Vehiculo {
    constructor(ruedas) {
      this.ruedas = ruedas; // Establece el número de ruedas del vehículo
    }
  
    mostrarDetalles() {
      return `Este vehículo tiene ${this.ruedas} ruedas.`; // Devuelve detalles del vehículo
    }
  }
  
  class Coche extends Vehiculo {
    constructor(ruedas, capacidadPasajeros) {
      super(ruedas); // Llama al constructor de la clase padre Vehiculo
      this.capacidadPasajeros = capacidadPasajeros; // Establece la capacidad de pasajeros del coche
    }
  
    mostrarDetalles() {
      // Sobrescribe el método mostrarDetalles para la clase Coche
      return `Este coche tiene ${this.ruedas} ruedas y puede llevar a ${this.capacidadPasajeros} pasajeros.`;
    }
  }
  
  class Bicicleta extends Vehiculo {
    constructor(ruedas, tipo) {
      super(ruedas); // Llama al constructor de la clase padre Vehiculo
      this.tipo = tipo; // Establece el tipo de bicicleta
    }
  
    mostrarDetalles() {
      // Sobrescribe el método mostrarDetalles para la clase Bicicleta
      return `Esta bicicleta tiene ${this.ruedas} ruedas y es una bicicleta de tipo ${this.tipo}.`;
    }
  }
  
  // Crear una instancia de Coche
  let miCoche = new Coche(4, 5);
  console.log(miCoche.mostrarDetalles()); // Muestra: Este coche tiene 4 ruedas y puede llevar a 5 pasajeros.
  
  // Crear una instancia de Bicicleta
  let miBicicleta = new Bicicleta(2, 'montaña');
  console.log(miBicicleta.mostrarDetalles()); // Muestra: Esta bicicleta tiene 2 ruedas y es una bicicleta de tipo montaña.
  