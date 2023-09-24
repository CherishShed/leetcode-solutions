function isHappy(n: number): boolean {
  if (n === 1 || n === 7) return true;
  const digitList = n
    .toString()
    .split("")
    .map((digit) => {
      return parseInt(digit);
    });

  const sum = digitList.reduce(
    (accumulator, currentValue) => accumulator + Math.pow(currentValue, 2),
    0
  );
  if (digitList.length < 2) return false;
  return isHappy(sum);
}
