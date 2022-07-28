function isPrime(number, previousPrimes) {
    if (number < 2) return false;
    const max = Math.floor(Math.sqrt(number));
    const _previousPrimes = previousPrimes || generatePrimes(max);
    // algorythm source: https://www.quora.com/Whats-the-best-algorithm-to-check-if-a-number-is-prime
    return _previousPrimes
        .filter(prime => prime <= max)
        .every(prime => number % prime !== 0);
}

function generatePrimes(limit) {
    const primes = [2];

    for (let i = 3; i <= limit; i += 2) {
        if (isPrime(i, primes)) {
            primes.push(i);
        }
    }

    return primes;
}

module.exports = {
    generatePrimes,
    isPrime,
};
