function getPrimeNumbers(min: number, max: number): number[] {
  const primeNumbers: number[] = [];

  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num !== 1;
}

console.log(getPrimeNumbers(11, 20));
