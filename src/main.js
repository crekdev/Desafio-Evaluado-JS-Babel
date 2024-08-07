import {Cliente} from './cliente.js';
import {Impuestos} from './impuestos.js';


const impuestoA = new Impuestos(4000000, 500000)
const clienteA = new Cliente('pepe', impuestoA)

console.log(`El impuesto que debe el cliente ${clienteA.nombre} es: $${clienteA.calcularImpuesto(impuestoA)}`)

console.log(impuestoA)
console.log(clienteA)