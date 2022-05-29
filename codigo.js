//DESAFIO COMPLEMENTARIO

//CREACION DE OBJETOS Y ARRAYS
//APLICACION DE PROPIEDADES Y METODOS

//Se ingresan diferentes marcas de productos en el objeto Producto con las propiedades nombre de producto, categoria, precio y stock del mismo.

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
//Se consulta el stock de los diferentes productos
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

//A partir de los datos mencionados anteriormente, se forma un Array con objeto

const productoA = [];
productoA.push(new Producto("Waltcan Adulto", "Alimento Balanceado", 1200, 0));
productoA.push(new Producto("Waltcan Cachorro", "Alimento Balanceado", 1000, 10));
productoA.push(new Producto("Jaspe Adulto", "Alimento Balanceado", 1200, 15));
productoA.push(new Producto("Jaspe Cachorro", "Alimento Balanceado", 1000, 10));
console.log(productoA);


//Se determina el producto sin stock, para eliminarlo luego
console.log(productoA
    .filter((p) => p.stock == "0")
    .map((p) => p.nombre)
);

//Determinacion de stock para pedido de Jaspe

console.log(productoA.length); //4

//Agregue componentes del objeto

productoA.push(new Producto("DogChow Cachorro", "Alimento Balanceado", 1000, 10));
console.log(productoA);
productoA.unshift(new Producto("DogChow Adulto", "Alimento Balanceado", 1200, 15));
console.log(productoA);

//Elimine el producto sin stock

productoA.shift(new Producto("Waltcan Adulto", "Alimento Balanceado", 1200, 0));
console.log(productoA);

//Cree un nuevo array con los productos

const jaspe = productoA.slice(2, 4);
console.log(jaspe)