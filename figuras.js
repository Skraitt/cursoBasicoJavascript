console.group("Cuadrado");

function perimetroCuadrado(lado){
 return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(altura, base){
    return (base*altura)/2;
}

function validarTrianguloIsosceles(lado1,lado2,base){
    if(lado1==lado2){
        return true;
    }else{
        return false;
    }
} 

function alturaTrianguloIsosceles(lado1,lado2,base){
    if(validarTrianguloIsosceles(lado1,lado2,base)==true){
        return Math.sqrt((lado1*lado1)-((base*base)/4)); 
    }
}

console.groupEnd();

console.group("Circulo");

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;4

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;4

    const area = areaCuadrado(value);
    alert(area);
}
