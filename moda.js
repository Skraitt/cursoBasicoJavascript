function calcularModa(lista){
    let  moda = 0;
    const listaObjetos = {};
    lista.map(
        function (elemento){
            if(listaObjetos[elemento]){
                listaObjetos[elemento] += 1;
            }else{
                listaObjetos[elemento] = 1;
            }   
        }
    );

    const listaArreglos = Object.entries(listaObjetos).sort(
        function (a, b){
            return a[1] - b[1];
        }
    );
    
    moda = listaArreglos[listaArreglos.length - 1];
    return moda; 
}