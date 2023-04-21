//  If value is truthy
const value = false;
if ("I am a string") {
  // print true
  console.log("true");
}
//  If value is falsy, print as shown below (else statement)
else if (false) {
  //      "The boolean value false is falsy"
  console.log("The boolean value false is falsy");
}
//      "The null value is falsy"
else if (null) {
  console.log("The null value is falsy");
}
//      "undefined is falsy"
else if (undefined) {
  console.log("undefined is falsy");
}
//      "The number 0 is falsy (the only falsy number)"
else if (0) {
  console.log("The number 0 is falsy(the only falsy number)");
}
//      "The empty string is falsy (the only falsy string)"
else if ("") {
  console.log("The empty string is falsy(the only flasy string)");
}
