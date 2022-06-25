function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelize(str) {
  return str.split('-')
            .map((item, index) => index > 0 ? capitalizeFirstLetter(item) : item)
            .join('');
}
