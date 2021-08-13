function calcularMedia(lista){
/*     let sumaLista = 0;                          Este es el metodo tradicional con for

    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/
    
    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }

    )
    
    const media = sumaLista/lista.length; 

    return media;
}