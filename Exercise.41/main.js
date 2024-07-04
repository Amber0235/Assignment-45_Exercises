// Define a function
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name
var magician_names = ["Keith clark", "David Copperfield", "Judson Cole"];
// Print each magician name
show_magicians(magician_names);
