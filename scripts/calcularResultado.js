
function calcular_resultadoneto(entrada) {
    calcular = entrada;

    for (let i = 0; i < 2; i++) {
        let contar = 0;
        const sumaOp = /[+]/g;
        const restaOp = /[-]/g;
        const muiltOp = /[x]/g;
        const divOp = /[÷]/g;

        contar = calcular.match(divOp);
        contar
        if (contar) {
            if(calcular_resultado(calcular.match(divOp).length, '÷')==1){
                return "Error: NO DEBE HABER UNA DIVISION POR 0";
            }
        }
        contar = calcular.match(muiltOp);
        contar
        if (contar) {
            calcular_resultado(calcular.match(muiltOp).length, 'x');
        }

        contar
        contar = calcular.match(restaOp);
        if (contar) {
            calcular_resultado(calcular.match(restaOp).length, '-');
        }
        contar
        contar = calcular.match(sumaOp);
        if (contar) {
            calcular_resultado(calcular.match(sumaOp).length, '+');
        }
    }
    return calcular;
}


function calcular_resultado(cantidadOp, operador) {

    let idx = 0;
    let a = 0;
    let b = 0;
    let idxAux = 1;
    let operaciones2 = 0;

    while (operaciones2 < cantidadOp) {
        if (calcular[idx] == operador) {

            while (!isNaN(calcular[idx - idxAux]) || calcular[idx - idxAux] == '.') {
                idxAux++;
            }
            a = calcular.slice((idx - (idxAux - 1)), idx);
            idxAux = 1;
            calcular
            while (!isNaN(calcular[idx + 1 + idxAux]) || calcular[idx + 1 + idxAux] == '.') {
                idxAux++;
            }
            b = calcular.slice(idx + 1, (idx + (idxAux + 1)));
            idxAux = 1;

            console.log(calcular);
            let operacion = operador;
            if (operacion == 'x') {
                calcular = calcular.replace(a + operador + b, (Number(a) * Number(b)).toFixed(2));
            }
            else if (operacion == '÷') {
                if(Number(b)==0){
                    return 1;
                }
                else{
                calcular = calcular.replace(a + operador + b, (Number(a) / Number(b)).toFixed(2));
                }
            }
            else if (operacion == '+') {
                calcular = calcular.replace(a + operador + b, (Number(a) + Number(b)).toFixed(2));
            }
            else if (operacion == '-') {
                calcular = calcular.replace(a + operador + b, (Number(a) - Number(b)).toFixed(2));
            }

            console.log(calcular);
            operaciones2++;                                  

            idx = 0
            console.log(idx);
        }
        idx++;
    }
}
