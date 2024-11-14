const secuencia = parseInt(prompt('Ingresa un numero'))
const fibooo = [0,1]

function fibo(secuencia){
    for(i=2; i<secuencia; i++){
        fibooo.push(fibooo[ i -1] + fibooo[i - 2])
    }
    return fibooo
}
console.log(fibo(secuencia))
