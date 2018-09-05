const number = parseInt(prompt('Enter a number'));
let fArr = [1, 1];
function calcFibonacci (num) {
    for (let i = 0; i < num - 2; i++) {
        fArr.push(fArr[i] + fArr[i + 1]);    
    }
    return fArr.pop();
}

console.log(calcFibonacci(number));