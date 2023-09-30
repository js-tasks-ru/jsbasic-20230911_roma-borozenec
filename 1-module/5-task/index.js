function truncate(str_2, maxlength)
{
  let final = [];
  let  mass = [];
  mass = str_2.split('');
  if (maxlength < mass.length) {
    for (let i = 0; i < maxlength; i++) {
      final[i] = mass[i];

    }
    final[maxlength-1] = '…';
    final = final.join('');
    return final;
  }
  if (maxlength >= mass.length) {
    for (let i = 0; i < mass.length; i++) {
      final[i] = mass[i];

    }
    final = final.join('');
    return final;
  }
}
