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
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}

//Circulo
function calcularCircunferencia() {
    var input = document.getElementById("inputCirculo");
    var value = input.value;

    var circunferenciaCirculo = circunferencia(value)
    alert(circunferenciaCirculo);
}

function calcularAreaCirculo() {
    var input = document.getElementById("inputCirculo");
    var value = input.value;

    var area = areaCirculo(value)
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    var inputLado = document.getElementById("inputLado");
    var inputBase = document.getElementById("inputBase");
    var lado = inputLado.value;
    var base = inputBase.value;

    var perimetro = (lado*2) + parseFloat(base);

    alert(perimetro);
}

function calcularAreatriangulo() {
    var inputLado = document.getElementById("inputLado");
    var inputBase = document.getElementById("inputBase");
    var lado = inputLado.value;
    var base = inputBase.value;

    var calculo = (lado * lado) - ((base/2) * (base/2));
    var altura = Math.sqrt(calculo)
    console.log(altura);
    console.log(base);
    var area = (base * altura) / 2;
    console.log(area);

    alert(area);
}