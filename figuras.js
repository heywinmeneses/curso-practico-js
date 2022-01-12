function perimetroCudrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio) {
    return radio * radio * Math.PI;
}

//Interacción con html

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCudrado(value)
    var result = document.getElementById("resultado-figuras");
    result.innerText = `El perimetro del del cuadrado es de ${perimetro} cm`;

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    var area = areaCuadrado(value)
    var result = document.getElementById("resultado-figuras");
    result.innerText = `El area del del cuadrado es de ${area} cm^2`;
}

//Circulo
function calcularCircunferencia() {
    var input = document.getElementById("inputCirculo");
    var value = input.value;

    var circunferenciaCirculo = circunferencia(value)
    var result = document.getElementById("resultado-figuras");
    result.innerText = `La circunferencia del del circulo es de ${circunferenciaCirculo} cm`;
}

function calcularAreaCirculo() {
    var input = document.getElementById("inputCirculo");
    var value = input.value;

    var area = areaCirculo(value)
    var result = document.getElementById("resultado-figuras");
    result.innerText = `El area del del circulo es de ${area} cm^2`;
}

//Triangulo
function calcularPerimetroTriangulo() {
    var inputLado = document.getElementById("inputLado");
    var inputBase = document.getElementById("inputBase");
    var lado = inputLado.value;
    var base = inputBase.value;

    var perimetro = (lado*2) + parseFloat(base);

    var result = document.getElementById("resultado-figuras");
    result.innerText = `El perimetro del del triangulo es de ${perimetro} cm`;
}

function calcularAreatriangulo() {
    var inputLado = document.getElementById("inputLado");
    var inputBase = document.getElementById("inputBase");
    var lado = inputLado.value;
    var base = inputBase.value;

    var calculo = (lado * lado) - ((base/2) * (base/2));
    var altura = Math.sqrt(calculo)
    var area = (base * altura) / 2;
  

    var result = document.getElementById("resultado-figuras");
    result.innerText = `El area del del tiangulo es de ${area} cm^2`;
}