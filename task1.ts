function numToStrWithComp(num: number): string {
  const n = Math.abs(num) % 100;
  const value = n % 10;
  const str = `${num} компьютер`;

  if (n > 10 && n < 20) {
    return `${str}ов`;
  }
  if (value > 1 && value < 5) {
    return `${str}а`;
  }
  if (value === 1) {
    return `${str}`;
  }

  return `${str}ов`;
}

console.log(numToStrWithComp(25));
