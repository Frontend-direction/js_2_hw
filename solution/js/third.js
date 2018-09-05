const number = parseInt(prompt('Enter a number'));

function calcFibonacci (num) {
    if(num  <= 1) {
        return num;
    } 
        return calcFibonacci(num - 1) + calcFibonacci(num - 2);
}
console.log(calcFibonacci(number));