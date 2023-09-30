function sumSalary(salaries) {

  let sum = 0;
  for (let key in salaries)
  {




    if ((typeof salaries[key] == 'number') && (salaries[key] != Infinity) && (salaries[key] != - Infinity)&&(isNaN(salaries[key])==false))
    {
      console.log(salaries[key]);
      sum = sum + salaries[key];

    }



  }
  return sum;
}
