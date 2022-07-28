
const { generatePrimes } = require('./primes');
const process = require('node:process');

const number = parseInt(process.argv[2]);

if (!number) {
    throw new Error('Please provide a limit number');
}

const primes = generatePrimes(number);
primes.forEach(prime => console.log(prime));