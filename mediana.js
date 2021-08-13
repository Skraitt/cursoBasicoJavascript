function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function calcularMediana(lista){
    const listaOrdenada = lista.sort(
        function (a,b){
            return a-b;
        }
    )
    let mediana = 0;
    let mitadLista = listaOrdenada.length / 2;
    if(esPar(listaOrdenada.length)){
        mediana = (listaOrdenada[mitadLista] + listaOrdenada[mitadLista-1]) / 2;
    }else{
        mitadLista = mitadLista - 0.5;
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

function calcularMiMediana(){
    let lista = new Array;
    const inputs = document.getElementById("inputList");
    console.log(inputs);
}