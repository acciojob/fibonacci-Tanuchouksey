function fibonacci(num) {
// your code here
	if (num <= 0) return 0; // According to the problem, 0th Fibonacci is 0
    if (num === 1) return 0; // The 1st Fibonacci number is also 0
    if (num === 2) return 1; // The 2nd Fibonacci number is 1

    let a = 0, b = 1, c;
    for (let i = 2; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

module.exports = fibonacci;
