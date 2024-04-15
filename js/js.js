document.querySelector("#calcular").addEventListener("click", dividirOctal)

function dividirOctal() {
    let valor1 = Number(document.querySelector("#valor1").value);
    let valor2 = Number(document.querySelector("#valor2").value);

    if(valor1 != 0 ) {
        let resultado = Math.floor(valor1 / valor2);
        let resto = valor1 % valor2;
        document.querySelector("#resultado").innerHTML  = "El resultado de la division es: " + resultado + " y el resto es: " + resto ;
        document.querySelector("#valor1").value = resultado;

                if (resto == 10){
            resto = "A";
        }
        if (resto == 11){
            resto = "B";
        }
        if (resto == 12){
            resto = "C";
        }
        if (resto == 13){
            resto = "D";
        }
        if (resto == 14){
            resto = "E";
        }
        if (resto == 15){
            resto = "F";
        }

        
        let array = [];
        array.push(resto);
        document.querySelector("#resto").innerHTML += " " + array;
    }
}
