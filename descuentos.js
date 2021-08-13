function calcularDescuento(precio,descuento){
    return (precio)*(100-descuento)/100;
}

function calculaMiDescuento(){
    const price = document.getElementById("inputPrice");

    const discount = document.getElementById("inputDiscount");

    const resultado = calcularDescuento(price.value, discount.value)

    const resultP = document.getElementById("resultP");

    resultP.innerText = "El precio con descuento es: $" + resultado;
}