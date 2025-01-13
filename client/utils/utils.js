export function titleFormat(str) {
  if (str.length <= 4) return str.toUpperCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}
