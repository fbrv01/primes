const assert = require('assert');
const { generatePrimes, isPrime } = require('../primes');

const truePrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const notPrimes = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63];

describe('isPrime', () => {
    truePrimes.forEach((number) => {
        it(`should return true for number ${number}`, () => {
            assert.equal(isPrime(number), true);
        });
    });
    notPrimes.forEach((number) => {
        it(`should return false for number ${number}`, () => {
            assert.equal(isPrime(number), false);
        });
    });
    it('should check the number 999983', () => {
        assert.equal(isPrime(999983), true);
    });
});

describe('generatePrimes', () => {
    it('should generate the first 100 primes', () => {
        const generatedPrimes = generatePrimes(100);
        assert.deepEqual(generatedPrimes, truePrimes);
    });
    it('should find the largest prime', () => {
        const generatedPrimes = generatePrimes(1000);
        const largestPrime = generatedPrimes[generatedPrimes.length - 1];
        assert.equal(largestPrime, 997);
    });
});
