let usuario = prompt('Ingresa el usuario: ')
let contrasena = prompt('Ingresa la contraseña: ')
const usuarioAdmin = "luis"
const contrasenaAdmin = "luis0987"
const usuarioVendedor = "carlos"
const contrasenaVendedor = "carlos34"

let productosTecnologicos = []
let productosHogar = []
let productosVarios = []
let productosMalos = []

function zonaCuatro() {
    function crearProducto() {
        var productoTecnologico = {}
        let nombreProducto = prompt("Ingrese el nombre: ");
        let referenciaProducto = prompt("Ingresa la referencia del producto: ");
        let valorProducto = prompt("Ingrese el valor de producto: ");
        let cantidadProducto = prompt("Ingrese la cantidad:  ");
        let descripcionProducto = prompt("Ingrese una descripcion del producto: ");
        productoTecnologico = {
            nombre: nombreProducto,
            referencia: referenciaProducto,
            valor: valorProducto,
            cantidad: cantidadProducto,
            descripcion: descripcionProducto,
        }
        return productoTecnologico;

    }
    productosTecnologicos.push(crearProducto())
}
function buscarProductoTecnologico() {
    let referencia = prompt("Ingrese la referencia: ");
    let productoEncontrado = productosTecnologicos.find((productoTecnologico) => referencia == productoTecnologico.referencia);
    return productoEncontrado
}
function listadoProductosTecnologicos() {
    productosTecnologicos.forEach((productoTecnologico) => {
        console.log(productoTecnologico)
    })
}

function zonaTres() {
    function crearProducto() {
        var productoHogar = {}
        let nombreProducto = prompt("Ingrese el nombre: ");
        let referenciaProducto = prompt("Ingresa la referencia del producto: ");
        let valorProducto = prompt("Ingrese el valor de producto: ");
        let cantidadProducto = prompt("Ingrese la cantidad:  ");
        let descripcionProducto = prompt("Ingrese una descripcion del producto: ");
        productoHogar = {
            nombre: nombreProducto,
            referencia: referenciaProducto,
            valor: valorProducto,
            cantidad: cantidadProducto,
            descripcion: descripcionProducto,
        }
        return productoHogar;
    }
    productosHogar.push(crearProducto())
}

function buscarProductoHogar() {
    let referencia = prompt("Ingrese la referencia: ");
    let productoEncontrado = productosHogar.find((productoHogar) => referencia == productoHogar.referencia);
    return productoEncontrado
}

function listadoProductosHogar() {
    productosHogar.forEach((productoHogar) => {
        console.log(productoHogar)
    })
}
function zonaDos() {
    function crearProducto() {
        var productoVarios = {}
        let nombreProducto = prompt("Ingrese el nombre: ");
        let referenciaProducto = prompt("Ingresa la referencia del producto: ");
        let valorProducto = prompt("Ingrese el valor de producto: ");
        let cantidadProducto = prompt("Ingrese la cantidad:  ");
        let descripcionProducto = prompt("Ingrese una descripcion del producto: ");
        productoVarios = {
            nombre: nombreProducto,
            referencia: referenciaProducto,
            valor: valorProducto,
            cantidad: cantidadProducto,
            descripcion: descripcionProducto,
        }
        return productoVarios;
    }
    productosVarios.push(crearProducto())
}
function buscarProductosVarios() {
    let referencia = prompt("Ingrese la referencia: ");
    let productoEncontrado = productosVarios.find((productoVarios) => referencia == productoVarios.referencia);
    return productoEncontrado
}

function listadoProductosVarios() {
    productosVarios.forEach((productoVarios) => {
        console.log(productoVarios)
    })
}

function zonaUno() {
    function crearProducto() {
        var productoMalo = {}
        let nombreProducto = prompt("Ingrese el nombre: ");
        let referenciaProducto = prompt("Ingresa la referencia del producto: ");
        let valorProducto = prompt("Ingrese el valor de producto: ");
        let cantidadProducto = prompt("Ingrese la cantidad:  ");
        let descripcionProducto = prompt("Ingrese una descripcion del producto: ");
        productoMalo = {
            nombre: nombreProducto,
            referencia: referenciaProducto,
            valor: valorProducto,
            cantidad: cantidadProducto,
            descripcion: descripcionProducto,
        }
        return productoMalo;
    }
    productosMalos.push(crearProducto())
}

function buscarProductosMalos() {
    let referencia = prompt("Ingrese la referencia: ");
    let productoEncontrado = productosMalos.find((productoMalo) => referencia == productoMalo.referencia);
    return productoEncontrado
}

function listadoProductosMalos() {
    productosMalos.forEach((productoMalo) => {
        console.log(productoMalo)
    })
}
if (usuario == usuarioAdmin && contrasena == contrasenaAdmin) {
    alert("Ingreso exitoso 🎉")
    let repetir = true;
    let opcion;
    while (repetir) {
        opcion = parseInt(prompt("Seleccione: \n1.Registrar productos \n2.Buscar productos \n3.Listado productos \n4.Salir"));
        if (opcion == 1) {
            opcion = parseInt(prompt("Seleccione la zona: \n1.Productos tecnologicos \n2.Productos de hogar \n3.Productos varios \n4.Productos malos \n5.Salir"))
            switch (opcion) {
                case 1:
                    zonaCuatro()
                    break;
                case 2:
                    zonaTres()
                    break;
                case 3:
                    zonaDos()
                    break;
                case 4:
                    zonaUno()
                    break;
                case 5:
                    break;
            }
        } if (opcion == 2) {
            opcion = parseInt(prompt("Seleccione la zona: \n1.Productos tecnologicos \n2.Productos de hogar \n3.Productos varios \n4.Productos malos \n4.Salir"))
            switch (opcion) {
                case 1:
                    console.log(buscarProductoTecnologico())
                    break;
                case 2:
                    console.log(buscarProductoHogar())
                    break;
                case 3:
                    console.log(buscarProductosVarios())
                    break;
                case 4:
                    console.log(buscarProductosMalos())
                    break;
            }
        } if (opcion == 3) {
            opcion = parseInt(prompt("Seleccione la zona: \n1.Productos tecnologicos \n2.Productos de hogar \n3.Productos varios \n4.Productos malos \n4.Salir"))
            switch (opcion) {
                case 1:
                    console.log(listadoProductosTecnologicos())
                    console.log(productosTecnologicos.length)
                    break;
                case 2:
                    console.log(listadoProductosHogar())
                    console.log(productosHogar.length)
                    break;
                case 3:
                    console.log(listadoProductosVarios())
                    console.log(productosVarios.length)
                    break;
                case 4:
                    console.log(listadoProductosMalos())
                    console.log(productosMalos.length)
                    break;
                case 5:
                    break;
            }
        } if (opcion == 4) {
            repetir = false;
        }else{
            alert("Opcion no valida")
        }
    }

}else if (usuario == usuarioVendedor && contrasena == contrasenaVendedor) {
    alert('Ingreso exitoso 🎉')
    let repetir = true;
    let opcion; 
    while (repetir) {
        opcion = parseInt(prompt("Seleccione: \n1.Registrar productos \n2.Buscar productos \n3.Listado productos \n4.Salir"));
        if (opcion == 1) {
            opcion = parseInt(prompt("Seleccione la zona: \n1.Productos tecnologicos \n2.Productos de hogar \n3.Productos varios \n4.Salir"))
            switch (opcion) {
                case 1:
                    zonaCuatro()
                    break;
                case 2:
                    zonaTres()
                    break;
                case 3:
                    zonaDos()
                    break;
                case 4:
                    break;
            }
        } if (opcion == 2) {
            opcion = parseInt(prompt("Seleccione la zona: \n1.Productos tecnologicos \n2.Productos de hogar \n3.Productos varios \n4.Salir"))
            switch (opcion) {
                case 1:
                    console.log(buscarProductoTecnologico())
                    break;
                case 2:
                    console.log(buscarProductoHogar())
                    break;
                case 3:
                    console.log(buscarProductosVarios())
                    break;
                case 4:
                    break;
            }
        } if (opcion == 3) {
            opcion = parseInt(prompt("Seleccione la zona: \n1.Productos tecnologicos \n2.Productos de hogar \n3.Productos varios \n4.Salir"))
            switch (opcion) {
                case 1:
                    console.log(listadoProductosTecnologicos())
                    console.log(productosTecnologicos.length)
                    break;
                case 2:
                    console.log(listadoProductosHogar())
                    console.log(productosHogar.length)
                    break;
                case 3:
                    console.log(listadoProductosVarios())
                    console.log(productosVarios.length)
                    break;
                case 4:
                    break;
            }
        } if (opcion == 4) {
            repetir = false
        } else{
            alert("Opcion no valida")
        }
    }
}else {
    alert('Usuario y/o contraseña incorrecto')
}