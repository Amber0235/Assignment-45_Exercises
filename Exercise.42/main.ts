function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

// Define an array of magician names
let magician_names = ["Keith Clark","David Copperfield","Judson Cole"]

// Another make_great function to modify magician names
let great_magicians = make_great(magician_names);

show_magicians(great_magicians);