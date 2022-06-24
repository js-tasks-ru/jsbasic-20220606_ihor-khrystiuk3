function getMinMax(str) {
  const numbers = str.split(' ').filter(item => !isNaN(parseFloat(item)) && isFinite(item));
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}
