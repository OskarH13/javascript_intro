function zaehleBuchstaben(str, buchstabe) {

  var kleinerStr = str.toLowerCase();
  var kleinerBuchstabe = buchstabe.toLowerCase();
  
  var zaehlung = 0;
  for (let i = 0; i < kleinerStr.length; i++) {
    if (kleinerStr[i] === kleinerBuchstabe) {
      zaehlung++;
    }
  }
  
  return zaehlung; 
}

console.log(zaehleBuchstaben("Hallo Welt", "l"));
