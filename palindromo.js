const palabra = prompt('Ingresa una palabra')

function palindromo(palabra){
    const palabraInvertida = palabra.split("").reverse().join("")
    if(palabra === palabraInvertida){
        console.log('La palabra es palindroma')
    }else{
        console.log('La palabra no es palindroma')
    }
}
console.log(palindromo(palabra))