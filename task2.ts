function getCommonDivisors(numbers: number[]): number[] {
  const arr: number[][] = [];
  let divisors: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    arr.push(getCommomDivisorsForOne(numbers[i]));
  }

  for (let i = 0; i < arr.length - 1; i++) {
    divisors = arr[i].filter((x) => arr[i + 1].includes(x));
  }

  return divisors;
}

function getCommomDivisorsForOne(num: number): number[] {
  const numbers: number[] = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(getCommonDivisors([42, 12, 18]));
