// Given two binary strings a and b, return their sum as a binary string.
function addBinary(a: string, b: string): string {
  let i = 1;
  let carry = 0;
  let sumString = "";
  while (i <= a.length || i <= b.length) {
    let bIndex = b.length - i;
    let aIndex = a.length - i;
    let bValue = 0;
    let aValue = 0;
    if (!(bIndex < 0)) {
      bValue = parseInt(b[bIndex]);
    }
    if (!(aIndex < 0)) {
      aValue = parseInt(a[aIndex]);
    }
    let sum = aValue + bValue + carry;
    while (sum > 1) {
      carry = Math.floor(sum / 2);
      sum = sum % 2;
    }
    if (sum > 1) {
      carry = 0;
    }
    sumString = sum.toString() + sumString;
    i++;
  }
  if (carry > 0) sumString = carry.toString() + sumString;
  return sumString;
}

console.log(addBinary("1111", "1111"));
