function calcularPrecioConDescuento(valor, porcentaje) {
 return valor - (valor * (porcentaje / 100) );
}

function calcularPrecio() {
    var inputPrice = document.getElementById("inputPrice");
    var inputDiscount = document.getElementById("inputDiscount");
    var price = inputPrice.value * 1;
    var cupon = inputDiscount.value * 1;
    var discount = 0;

    switch (cupon) {
        case 1:
            discount = 50;
            break;
        case 2:
            discount = 40;
            break;
        case 3:
            discount = 35;
            break;
        case 4:
            discount = 20;
            break;
        default:
            discount = 0;
    };

    var precioConDescuento = calcularPrecioConDescuento(price, discount);

    const result = document.getElementById("result");
    result.innerText = `El resultado del precio con descuento es de $${precioConDescuento}`;
}