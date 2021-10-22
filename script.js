let usuario = prompt('¿Cuál es tu nombre?');
let edad = Number(prompt('¿Qué edad tienes?'));
let tipo_alojamiento_1 = 'Habitación compartida'; // 20-30 usd por noche
let tipo_alojamiento_2 = 'Habitación privada'; // 30-40 usd por noche
let tipo_alojamiento_3 = 'Departamento'; // 40-200 usd por noche
let tipo_alojamiento_4 = 'Hotel 5 estrellas'; //  mas de 200usd por noche



if (edad >= 18){
    alert('Bienvenid@' + ' ' + usuario + ', como eres mayor de edad puedes hacer una reserva en nuestro sitio web');
    let presupuesto = Number(prompt('¿Cuánto dinero te gustaría gastar en alojamiento por noche?'));

    if (presupuesto < 20) {
        alert('Lo sentimos, por el momento no tenemos un alojamiento que cumpla con estos parámetros');
    }else if (presupuesto <= 30){
        alert('Te recomendamos reservar en un alojamiento de tipo' + ' ' + tipo_alojamiento_1);
    }else if (presupuesto <= 60){
        alert('Te recomendamos reservar en un alojamiento de tipo' + ' ' + tipo_alojamiento_2);
    }else if (presupuesto <= 200){
        alert('Te recomendamos reservar en un alojamiento de tipo' + ' ' + tipo_alojamiento_3);
    }else if (presupuesto > 200){
        alert('Te recomendamos reservar en un alojamiento de tipo' + ' ' + tipo_alojamiento_4);
    }
}else{
    alert('Lo sentimos' + ' ' + usuario + ', necesitas ser mayor de edad para poder efectuar una reserva');
}

//let tiempo = Number(prompt('¿Cuántas noches quieres reservar?'));
