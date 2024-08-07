class Cliente {

  #nombre
  #impuesto
  constructor(nombre, impuesto) {
    this.#nombre = nombre
    this.#impuesto = impuesto
  }

  get nombre() {
    return this.#nombre
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre
  }

  calcularImpuesto() {
    // destructuring documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { montoBrutoAnual, deducciones } = this.#impuesto;
    let resultadoFormula = (montoBrutoAnual - deducciones) * 0.21;
    return resultadoFormula;
  }
}

export { Cliente }