// Define the function to show magicians names

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}
// Make function through map().It will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

// Define an array of magician names
let magician_names = ["Keith Clark","David Copperfield","Judson Cole"]

// Making a copy of original array through . slice() function

let copy_magician_names = magician_names.slice()

// Moidfy the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show original and copied array

// Original

console.log("original Array\n")
show_magicians(copy_magician_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians); 