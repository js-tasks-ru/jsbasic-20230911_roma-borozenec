function camelize(zx) {
  let m = [];
  let arfin = [];
  let arst = zx.split("-");
  for (let z = 0; z < arst.length; z++) {
    if (z != 0) {
      m = arst[z].split('');
      m[0] = m[0].toUpperCase();



      arfin[z] = m.join('');
      
    }
    else {

      arfin[z] = arst[z];
    }

  }


  return arfin.join('');
}
