let numOperaciones = prompt('¿Cuantas operaciones te gustaría realizar?');
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;
let continuar = 0;


for(let i = 1 ; i <= numOperaciones ; i++) {

let num1 = Number(prompt("Ingrese el primer numero de la operación"));
let num2 = Number(prompt("Ingrese el segundo numero de la operación"));
let operacion = prompt("Escriba la operación que le gustaría realizar (+, - , *, /)");

if (operacion === '+'){
    let suma = num1 + num2;
    alert(`El resultado de la suma es:  ${suma} `)
}else if (operacion === '-'){
    let resta = num1 - num2;
    alert(`El resultado de la suma es:  ${resta} `)
}else if (operacion === '/'){
    let division = num1 / num2;
    alert(`El resultado de la suma es:  ${division} `)
}else if (operacion === '*'){
    let multiplicacion = num1 * num2;
    alert(`El resultado de la suma es:  ${multiplicacion}`)
}else if (operacion != '+' || operacion != '-' || operacion != '/' || operacion != '*'){
    continuar = Number(prompt(`Esa operación no es válida, ¿Te gustaría ingresar otra operación (Sí=1/No=2)?`))
        if (continuar === 1){
    
                let num1 = Number(prompt("Ingrese el primer numero de la operación"));
                let num2 = Number(prompt("Ingrese el segundo numero de la operación"));
                let operacion = prompt("Escriba la operación que le gustaría realizar (+, - , *, /)");

                if (operacion === '+'){
                    let suma = num1 + num2;
                    alert(`El resultado de la suma es:  ${suma} `)
                }else if (operacion === '-'){
                    let resta = num1 - num2;
                    alert(`El resultado de la suma es:  ${resta} `)
                }else if (operacion === '/'){
                    let division = num1 / num2;
                    alert(`El resultado de la suma es:  ${division} `)
                }else if (operacion === '*'){
                    let multiplicacion = num1 * num2;
                    alert(`El resultado de la suma es:  ${multiplicacion}`)
                        }
                else{
                    alert('Gracias por haber participado')
                    break
                }
}else{
   console.log('Fin')
    break

}
}
}
