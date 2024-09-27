//Importamos la suma desde operaciones
import { addCliente, listaClientes } from "./cleintes.js";
import { suma,resta, PI } from "./operaciones.js";

let numero1=23;
let numero2=4;
let resultado= suma(numero1,numero2);
console.log(resultado);
console.log(PI);

//Crear clientes
addCliente('Pepe Lopez', 'aitortilla@gmail.com');
addCliente('Ana Vohueles', 'anavohuele@gmail.com');

console.log (listaClientes);

let clientes = listaClientes();
console.log(clientes[0].nombre)