function ucFirst(str) {
  if (str.length === 0) {
    return str;
  }
  const result = str.charAt(0).toUpperCase() + str.slice(1);
  console.log('str ', str);
  return result;
}
