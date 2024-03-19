function entferneElement(arr, wert) {
  var index = arr.indexOf(wert);
  
  if (index !== -1) {
    arr.splice(index, 1);
  }
  
  return arr;
}

console.log(entferneElement([1, 2, 3, 4, 5], 3)); 
