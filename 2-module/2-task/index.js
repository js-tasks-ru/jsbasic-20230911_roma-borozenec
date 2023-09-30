
  function isEmpty(obj)
  {
    let i = 0;
    for ( let m in obj)
    {
      i++;
    }

    if (i == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }


