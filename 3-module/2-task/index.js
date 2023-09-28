



function filterRange(arr, a, b) {
let final1=[];
  for (let i = 0; i < arr.length; i++) {

    if ((a != 0) && (b != 0) && (arr[i] >= a) && (arr[i] <= b))
    {

      final1.push(arr[i]);
      
    }
  }

  return final1;

}
