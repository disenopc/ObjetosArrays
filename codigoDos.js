//El siguiente codigo, corresponde a un Ecommerce que permite descontar del stock los productos que el cliente elige
//En el caso que no se encuentren en el stock va a salir por alerta que no hay de esos productos
class Compra {
    constructor(nombre, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.cantidad = parseInt(cantidad);
    }

}
class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.stock = stock;

    }
};
const productoA = [];
productoA.push(new Producto("WALTCAN ADULTO", "Alimento Balanceado", 1200, 0));
productoA.push(new Producto("WALTCAN CACHORRO", "Alimento Balanceado", 1000, 10));
productoA.push(new Producto("JASPE ADULTO", "Alimento Balanceado", 1200, 15));
productoA.push(new Producto("JASPE CACHORRO", "Alimento Balanceado", 1000, 10));
console.log(productoA);
const compras = [];

function stock() {
    let nombre;
    do {
        nombre = prompt("Ingrese el nombre del producto que desea");
        if (nombre == "") {
            break
        }
        let cantidad = parseInt(prompt("Ingrese la cantidad deseada"));
        let comprasIng = new Compra(nombre, cantidad);
        let stockDispo = productoA.find((c) => c.stock >= cantidad);
        if (stockDispo) {
            if (stockDispo.stock > "0") {
                alert("El articulo que usted desea se encuentra disponible");
                compras.push(comprasIng);
                console.log(compras);
                let ahora = new Date();
                alert("Gracias por su compra" + ", " + ahora.toLocaleString());
                break;
            } else {
                alert("El articulo que usted desea NO se encuentra disponible");
            }
        }
        alert("El producto ingresado no se encuentra en nuestra variedad de opciones ");

    }
    while (nombre !== "");
}
stock();


function restarStock() {
    return a - b;
}