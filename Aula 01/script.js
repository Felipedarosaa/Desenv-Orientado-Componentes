function somaDoisNumeros(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log('A soma de', numero1, 'e', numero2, 'é:', resultado);
}
// Ver no console
somaDoisNumeros(1,1);



console.log("-----------------------")


function identificarParesEImpares(lista) {
    
    const pares = [];
    const impares = [];

    for (let numero of lista) {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }

    console.log('Números pares:', pares);
    console.log('Números ímpares:', impares);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// O resultado será exibido no console
identificarParesEImpares(numeros);