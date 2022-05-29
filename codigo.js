//DESAFIO COMPLEMENTARIO

//CREACION DE OBJETOS Y ARRAYS
//APLICACION DE PROPIEDADES Y METODOS

class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.stock = stock;

    }
    sinStock() {
        return this.stock == 0;
    }

}
const alimento1 = new Producto("Waltcan Adulto", "Alimento Balanceado", 1200, 0);
const alimento2 = new Producto("Waltcan Cachorro", "Alimento Balanceado", 1000, 10);
const alimento3 = new Producto("Jaspe Adulto", "Alimento Balanceado", 1200, 15);
const alimento4 = new Producto("Jaspe Cachorro", "Alimento Balanceado", 1000, 10);
const alimento5 = new Producto("Pedigree Adulto", "Alimento Balanceado", 1200, 15);
const alimento6 = new Producto("Pedigree Cachorro", "Alimento Balanceado", 1000, 10);
const alimento7 = new Producto("DogChow Adulto", "Alimento Balanceado", 1200, 15);
const alimento8 = new Producto("DogChow Cachorro", "Alimento Balanceado", 1000, 10);
console.log(alimento1);
console.log(alimento2);
console.log(alimento3);

for (const precio in alimento8) {
    console.log(alimento8[precio]);
}

console.log("cantidad" in alimento1);

for (let i = 0; i < 3; i++) {
    let entrada = parseInt(prompt("El stock de qué producto desea consultar?"));
    if (alimento1.sinStock(entrada)) {
        alert(entrada + "No hay stock de ese producto" + alimento1.stock);
        break;
    }
    alert("El producto cuenta con " + alimento1.stock + ", en stock");
    if (alimento2.sinStock(entrada)) {
        alert(entrada + "No hay stock de ese producto" + alimento2.stock);
        break;
    }
    alert("El producto cuenta con " + alimento2.stock + ", en stock");
    if (alimento3.sinStock(entrada)) {
        alert(entrada + "No hay stock de ese producto" + alimento3.stock);
        break;
    }
    alert("El producto cuenta con " + alimento3.stock + ", en stock");
}

//Arrays

const productoA = [];
productoA.push(new Producto("Waltcan Adulto", "Alimento Balanceado", 1200, 0));
productoA.push(new Producto("Waltcan Cachorro", "Alimento Balanceado", 1000, 10));
productoA.push(new Producto("Jaspe Adulto", "Alimento Balanceado", 1200, 15));
productoA.push(new Producto("Jaspe Cachorro", "Alimento Balanceado", 1000, 10));
console.log(productoA);


//Producto Sin Stock
console.log(productoA[0]);

//Pedido a Jaspe

console.log(productoA[2] + productoA[3]);

//Lenght

console.log(productoA.length); //4

//Push

productoA.push(new Producto("DogChow Cachorro", "Alimento Balanceado", 1000, 10));
console.log(productoA);