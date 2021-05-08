var ejercicioUno = ()=>{
    var a1 = document.getElementById("asu1").value
    var dif = document.getElementById("dif").value
    
    
    terminos=[]
    const diferencia=parseInt(dif)
    let asu1=parseInt(a1)

    for (let i = 0; i < 10; i++) {
        resultado=diferencia+asu1
        terminos[i]=resultado
        asu1=resultado
        asu1 + diferencia;
    }

    alert("LOS SIGUIENTES 10 NUMEROS: "+terminos)   
}
// ------------------------------------------

var ejercicioDos = ()=>{
    var asu2 = document.getElementById("asuk").value
    var posicion = document.getElementById("pos").value
    var dif = document.getElementById("dif2").value
    
    
    asuN=0;
    asuK=parseInt(asu2)
    n=0
    k=parseInt(posicion)
    d=parseInt(dif)
    terminos2=[]

    for (let i = 1; i <= 10; i++) {
        termino1=i-k;
        termino2= termino1*d
        asuN= (asuK+termino2)
        terminos2[i]=asuN
        
    }
    alert("Desde el termino 1: " + terminos2)
}

// ------------------------------------------


var ejercicioTres = ()=>{
    var terminoUno=document.getElementById("termino1").value
    var terminoDos=document.getElementById("termino2").value

    termUno=parseInt(terminoUno)
    termDos=parseInt(terminoDos)

    var diferencia = (termDos-termUno)

    let terminoGeneral = termUno-diferencia*1

    alert("El termino general es: "+terminoGeneral)
}

var ejercicioCuatro = ()=>{
    var terminoUno=document.getElementById("termino1").value
    var terminoDos=document.getElementById("termino2").value
    
    let nuevoN = document.getElementById("nuevoValor").value
    termUno=parseInt(terminoUno)
    termDos=parseInt(terminoDos)

    var diferencia = (termDos-termUno)
    let terminoGeneral = termUno-diferencia*1
    n=parseInt(nuevoN);
    resultado = diferencia*n
    resultado=resultado+terminoGeneral
    alert(resultado)

}


