function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n < 1) {
    throw new Error('Number should be equal 0 or greater.');
  }

  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
}

console.log(factorial(-1));
