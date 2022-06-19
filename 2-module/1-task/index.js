function sumSalary(salaries) {
  if (Object.keys(salaries).length === 0) {
    return 0;
  }
  let result = 0;
  for (const key in salaries) {
    if (Number.isFinite(salaries[key])) {
      result += salaries[key];
    }
  }
  return result;
}
