function umkehrenArray(arr) {
  var umgekehrtesArray = []; 
  for (let i = arr.length - 1; i >= 0; i--) {
    umgekehrtesArray.push(arr[i]); 
  }
  return umgekehrtesArray; 
}

console.log(umkehrenArray([1, 2, 3, 4, 5])); 
