// Utils 

function esPar(numero){
    return (numero % 2 === 0);
}

// Mediana General

const salariosCol = colombia.map(persona => persona.salary);

const salariosColSorted = salariosCol.sort((a, b) => a-b);

function calcularMedia(lista){
    const sumaLista = lista.reduce((valorAcomulado = 0, nuevoElemento) => valorAcomulado+nuevoElemento);
    return sumaLista/lista.length;
}

function medianaSalarios(lista){
    let mediana = 0;
    const mitadLista = parseInt(lista.length / 2)
    if(esPar(lista.length)){
        const salarioMitad1 = lista[mitadLista];
        const salarioMitad2 = lista[mitadLista - 1];
        mediana = calcularMedia([salarioMitad1, salarioMitad2]);
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10% 

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTop10Col = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosTop10Col);



console.log({
    medianaGeneralCol,
    medianaTop10Col
});