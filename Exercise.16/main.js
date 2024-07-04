// creating a guestlist array
var guestList = ["Sadia", "Anam", "Ather", "Ahson"];
var dontCome = guestList[0];
console.log(dontCome, "Nhi Askti Hai");
// Add and Remove values from guestlist array
guestList.splice(0, 1, "Amir");
console.log("Good News ! We have found a bigger table for dinner");
// Adding a new value a starting index of array
guestList.unshift("Ali");
// Adding a new value at ending index of array
guestList.push("Amber");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Taha");
// print message of updated list
console.log("Updated List of our Guests");
//Sending a message of our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Assalam-o-Alaikum ".concat(oneguest, ", Would you like to dinner at my home")); });
