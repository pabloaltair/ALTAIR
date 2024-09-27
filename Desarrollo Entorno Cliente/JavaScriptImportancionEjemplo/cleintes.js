//codigo para crear lista de clientes

let clientes = [];

export function addCliente(nombre, correo) {
    clientes.push({nombre, correo});
}
export function listaClientes (){
    return clientes;
}