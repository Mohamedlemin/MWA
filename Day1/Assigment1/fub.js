const fib = function fibonacci(num) {
    if (num<0) {
        num=num*(-1)
    }

    if (num <= 2) {
        return 1;
    }else{
        return fibonacci(num-1)+fibonacci(num-2)
    }
}
console.log("fibonacci of -42 is "+fib(-42))
console.log("fibonacci of 7 is "+fib(7))

module.exports = {
    fib
}