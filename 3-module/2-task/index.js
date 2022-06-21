function isInRange(value, a, b) {
  return value >= a && value <= b;
}

function filterRange(arr, a, b) {
  return arr.filter(item => isInRange(item, a, b));
}
