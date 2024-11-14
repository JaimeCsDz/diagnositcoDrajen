const longitud = parseInt(prompt('Ingresa un numero'))

function generarContrasena(longitud) {
    if (longitud < 8) {
        throw new Error("La longitud mínima es de 8 caracteres.");
    }

    const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const caracteresEspeciales = "!@#$%^&*()_+[]{}|;:,.<>?";

    let contrasena = [
        letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)],
        letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)],
        numeros[Math.floor(Math.random() * numeros.length)],
        caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)]
    ];

    const todosCaracteres = letrasMayusculas + letrasMinusculas + numeros + caracteresEspeciales;
    for (let i = contrasena.length; i < longitud; i++) {
        contrasena.push(todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)]);
    }

    contrasena = contrasena.sort(() => Math.random() - 0.5);

    return contrasena.join("");
}
;
console.log("Contraseña generada:", generarContrasena(longitud));

