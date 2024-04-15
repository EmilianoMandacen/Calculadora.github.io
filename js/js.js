document.querySelector("#calcular").addEventListener("click", dividirOctal)

function dividirOctal() {
    let valor1 = Number(document.querySelector("#valor1").value);
    let valor2 = Number(document.querySelector("#valor2").value);

    if(valor1 != 0 ) {
        let resultado = Math.floor(valor1 / valor2);
        let resto = valor1 % valor2;
        document.querySelector("#resultado").innerHTML  = "El resultado de la division es: " + resultado + " y el resto es: " + resto ;
        document.querySelector("#valor1").value = resultado;

        let array = [];
        array.push(resto);
        document.querySelector("#resto").innerHTML += " " + array;
    }
}
