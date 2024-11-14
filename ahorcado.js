let palabra = prompt('Ingresa la palabra a adivinar').replace(/\s+/g, '');

if (palabra.length <= 0) {
    alert('Ingresa una palabra válida');
    window.location.reload()
} else {
    const intentosMaximos = 5;
    let intentos = 0;
    let estadoActual = Array(palabra.length).fill("_");
    let intentosRestantes = intentosMaximos;

    document.getElementById("estadoPalabra").innerText = estadoActual.join(" ");

    function adivinarLetra() {
        const letraInput = document.getElementById("letraInput").value.toLowerCase();
        document.getElementById("letraInput").value = "";

        let acierto = false;

        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letraInput && estadoActual[i] === "_") {
                estadoActual[i] = letraInput;
                acierto = true;
            }
        }

        if (!acierto) {
            intentos++;
            intentosRestantes--;
        }

        document.getElementById("estadoPalabra").innerText = estadoActual.join(" ");
        document.getElementById("intentosRestantes").innerText = intentosRestantes;

        if (estadoActual.join("") === palabra) {
            document.getElementById("resultado").innerText = "¡Felicidades! Has adivinado la palabra: " + palabra;
            document.getElementById("letraInput").disabled = true;
        } else if (intentos >= intentosMaximos) {
            document.getElementById("resultado").innerText = "Lo siento, has perdido. La palabra era: " + palabra;
            document.getElementById("letraInput").disabled = true;
        } else {
            document.getElementById("mensaje").innerText = acierto ? "Letra correcta" : "Letra incorrecta.";
        }
    }
}
