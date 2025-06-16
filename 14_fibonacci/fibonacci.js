const fibonacci = function(n) {
     n = Number(n);  // convert string input to number

    if (n < 0) return "OOPS";  // handle negatives
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Do not edit below this line
module.exports = fibonacci;
