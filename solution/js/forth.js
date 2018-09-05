const number = parseInt(prompt('Enter a number'));

function calcFibonacci(num) {
    const sqrtOf5 = Math.sqrt(5);
    const Phi = (1 + sqrtOf5)/ 2;
    const phi = (1 - sqrtOf5)/ 2

    return (Math.pow(Phi, num) - Math.pow(phi, num)) / sqrtOf5;
}

console.log(calcFibonacci(number));