function checkSpam(str) {


  str = str.toUpperCase();

  if (str.indexOf('1XBET')!=-1) {
    return true;

  }
  else if (str.indexOf('XXX') != -1) {
    return true;

  }

  else
  {
    return false;
  }

}
