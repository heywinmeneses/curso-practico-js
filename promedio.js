/*
function calcularPrimedio(lista) {
    
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma = suma + lista[i];
    };
    
    return suma / lista.length;

    
};

*/

//CALCULAR PROMEDIO
function calcularPrimedio(lista) {

    var sumaLista = lista.reduce( //Suma los elemento de la lista
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    return sumaLista / lista.length;
}

//CALCULAR MEDIANA
function calcularMediana(lista) {
    
    var mitad = lista.length / 2;
    var mediana;
    //Verificar si la lista es par o impar
    if (mitad % 2 == 0) {
        mediana = [lista[mitad - 1], lista[mitad]];
    } else {
        mediana = [lista[mitad - 0.5]];
    }

    return mediana
}

//CALCULAR MODA
function calcularModa() {

    var listaCount = {};
    
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
           
        }
    )
    
    var listaRepetidos = Object.entries(listaCount); //convertir objeto en Array
    var listaOrdenada = listaRepetidos.sort( //ordenar Array
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    var moda = listaOrdenada[listaOrdenada.length - 1];
    return moda[0] * 1;
}

//CALCULAR PROMEDIO PONDERADO

function calcularPromedioPonderado(listaNotas){ //recibe una lista con listas con valor y peso ejemplo [[2,1],[3,3],[5,2]]
    
    var sumaCreditos = 0;
    var sumaNotas = 0;
    
    listaNotas.map(
        function (elemento) {
            var nota = elemento[0] * elemento[1];
            sumaNotas = sumaNotas + nota;
            sumaCreditos = sumaCreditos + elemento[1];
        });
    
    return sumaNotas / sumaCreditos;
}














