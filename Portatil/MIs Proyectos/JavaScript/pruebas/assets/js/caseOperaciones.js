// Case con operaciones.

let op = prompt('Introduce una opcion');

switch(op){
    case '1':
        suma();
        break;
}

//Funciones de las operaciones.

let suma = () =>{
    //Pedimos los numero por pantalla.
    let valor1 = prompt("Dame el valor 1",0);
    let valor2 = prompt("Dame el valor 2",0);

    console.log("El contenido de un prompt es del tipo: " + typeof(valor1));

    valor1 = (valor1=="")?"0":valor1;
    valor2 = (valor2=="")?"0":valor2;

    return alert("La suma de " + valor1 + "+" + valor2 + " es " + suma);
}