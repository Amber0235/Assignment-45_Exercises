// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Make function through map().It will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magician names
var magician_names = ["Keith Clark", "David Copperfield", "Judson Cole"];
// Making a copy of original array through . slice() function
var copy_magician_names = magician_names.slice();
// Moidfy the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// Show original and copied array
// Original
console.log("original Array\n");
show_magicians(copy_magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
