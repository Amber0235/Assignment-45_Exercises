let guestList = ["Sadia","Anam","Ather","Ahson"];

let dontCome = guestList[0];

console.log(dontCome, "Nhi Askti");

guestList.splice(0, 1, "Amir");
guestList.forEach(guest => console.log(`Assalam-o-Alaikum ${guest}, would you like to dinner at my home?`));