var year = prompt('Ingresa tu año de nacimento')
var month = prompt('Ingresa tu mes de nacimiento (1, 12)')
var day = prompt('Ingresa tu dia de nacimiento')
var hour = prompt('Ingresa la hora en la que naciste (0, 23)')

function edad(year, month, day, hour){
    const fechaActual = new Date()
    const añoActual = fechaActual.getFullYear()
    const mesActual = fechaActual.getMonth() + 1
    const diaActual = fechaActual.getDate()
    const horaActual = fechaActual.getHours()


    let edad = añoActual - year


    if(mesActual < month || (mesActual === month && diaActual < day)){
        edad --
    }


    return (`Usted tiene ${edad} años`)
}

console.log(edad(year, month, day, hour))

