function ucFirst(str) {
  if (str == '')
  {
    return '';
  }
  let mass = [];
  mass = str.split('');
  mass[0] = mass[0].toUpperCase();
  str = mass.join('');
  return str;
}
