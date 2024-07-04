// Make album function

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };
 
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}

// Calling three functions and create three variables with different values

let album1 = make_album("Amir","Album title 1");
let album2 = make_album("Ather","Album title 2");

// Calling function with third parameter
let album3 = make_album("Ahson","album title 3", 8);

// Print variables
console.log(album1);

console.log(album2);

console.log(album3);