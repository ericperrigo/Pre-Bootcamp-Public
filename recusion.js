//Recursive Sigma

function rSigma(num) {
    if (num < 1) {
        return 0;
    }
    return Math.floor(num) + rSigma(num - 1);
}

//Recusive Factorial

function rFact(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return 1;
    }
    if (num === 0) {
        return 1;
    }
    return Math.floor(num) * rFact(Math.floor(num) - 1);
}
