function diffArray(arr1, arr2) {

  const newArr = [];
  let copyOfBoth = arr1.concat(arr2);

  for(let item of copyOfBoth){
    if(arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1 )
      newArr.push(item)
  }
  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
