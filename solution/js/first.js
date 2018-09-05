const number = parseInt(prompt('Enter a number'));
function calcFibonacci (num) {
    let f1 = 1;
    let f2 = 1;
    let fNext = 0;
    for (let i = 0; i < num - 2; i++) {
        fNext = f1 + f2;
        f1 = f2;
        f2 = fNext;
    }
    return fNext;
}
console.log(calcFibonacci(number));