let precioPan = 5;
let precioLeche = 10;
let precioHuevos = 15;
let cantidad = 0;
let totalPan = 0;
let totalLeche = 0;
let totalHuevos = 0;
let presupuesto = 0;
let compra = 0;
let saldo = 0;

function compraPan(cantidad, precioPan) {
  alert(`El costo de su compra es de ${cantidad * precioPan}`);
  return cantidad * precioPan;
}

function compraLeche(cantidad, precioLeche) {
  alert(`El costo de su compra es de ${cantidad * precioLeche}`);
  return cantidad * precioLeche;
}

function compraHuevos(cantidad, precioHuevos) {
  alert(`El costo de su compra es de ${cantidad * precioHuevos}`);
  return cantidad * precioHuevos;
}

function compraTotal(totalPan, totalLeche, totalHuevos, presupuesto) {
  alert(`Muchas gracias, el total de su compra es ${totalPan + totalLeche + totalHuevos}, su vuelto es de ${presupuesto - (totalPan + totalLeche + totalHuevos)}`)
  return totalPan + totalLeche + totalHuevos; 
}

function pedirPresupuesto(){
  presupuesto = Number(prompt('¿Cual es su presupuesto?'));
  return presupuesto
}


pedirPresupuesto()

do {
  compra = Number(
    prompt(`Escriba el número del producto que va a querer comprar:
1 - PAN
2- LECHE
3 - HUEVOS
0 - FINALIZAR COMPRA`)
  );

  switch (compra) {
    case 1:
      cantidad = Number(prompt(`¿Cuántas unidades de pan va a querer?`));
      totalPan = compraPan(cantidad, precioPan)
      alert(`${cantidad} unidades de pan tienen un total de ${totalPan}`);
      saldo = alert(`Tiene un saldo de ${presupuesto - totalPan}`)
      break;
    case 2:
      cantidad = Number(prompt(`¿Cuántas unidades de leche va a querer?`));
      totalLeche = compraLeche(cantidad, precioLeche)
      alert(`${cantidad} unidades de pan tienen un total de ${totalLeche}`);
      saldo = alert(`Tiene un saldo de ${presupuesto - totalLeche}`)
      break;
    case 3:
      cantidad = Number(prompt(`¿Cuántas unidades de huevo va a querer?`));
      totalHuevos = compraHuevos(cantidad, precioHuevos)
      alert(`${cantidad} unidades de pan tienen un total de ${totalHuevos}`);
      saldo = alert(`Tiene un saldo de ${presupuesto - totalHuevos}`)
      break;
    default:
      break;
  }

}while (compra != 0)
    alert(compraTotal(totalPan, totalLeche, totalHuevos, presupuesto))



    
