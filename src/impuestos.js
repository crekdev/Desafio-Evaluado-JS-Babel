class Impuestos {
  #montoBrutoAnual
  #deducciones
  constructor(montoBrutoAnual, deducciones) {
    this.#montoBrutoAnual = montoBrutoAnual
    this.#deducciones = deducciones
  }

  get montoBrutoAnual() {
    return this.#montoBrutoAnual
  }

  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    this.#montoBrutoAnual = nuevoMontoBrutoAnual
  }

  get deducciones() {
    return this.#deducciones
  }

  set deducciones(nuevaDeducciones) {
    this.#deducciones = nuevaDeducciones
  }
}

export { Impuestos }