function getMinMax(str) {
  // ваш код...
  let max1 = 0;
  let min1 = 0;
  let del = [];
  let count = [];
  let j = 0;
  del = str.split(' ');
  for (let i = 0; i < del.length; i++)
  {

    if( isNaN(del[i])==false)
    {
      count[j] = del[i];
      console.log(count[j]);
      j++;
    }

  }
  max1 = Math.max.apply(Math,count);

  min1 = Math.min.apply(Math,count);

  let result = { min: min1, max: max1 };
  return result;

}
