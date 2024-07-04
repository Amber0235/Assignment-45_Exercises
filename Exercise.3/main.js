//lower case
var person_name = "ambreen Amir";
console.log(person_name.toLowerCase());
//upper case
console.log(person_name.toUpperCase());
// title case
console.log(person_name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
