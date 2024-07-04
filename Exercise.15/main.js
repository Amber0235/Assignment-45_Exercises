var guestList = ["Sadia", "Anam", "Ather", "Ahson"];
var dontCome = guestList[0];
console.log(dontCome, "Nhi Askti");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Assalam-o-Alaikum ".concat(guest, ", would you like to dinner at my home?")); });
