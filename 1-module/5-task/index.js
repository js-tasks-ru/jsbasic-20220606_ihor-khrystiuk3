function truncate(str, maxlength) {
  const ellipsis = "…";
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - ellipsis.length) + ellipsis;
}
