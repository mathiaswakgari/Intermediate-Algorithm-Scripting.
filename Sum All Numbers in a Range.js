function sumAll(arr) {
  let start = arr[0];
  let end = arr[1];
  let sum = 0;

  if(start < end){
    for(let i = start; i <= end; i++)
      sum += i;
    }
  else{
    for(let i = start; i >= end; i--)
      sum += i;
    }
    return sum
  }
    


sumAll([2, 2]);
