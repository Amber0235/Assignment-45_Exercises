// creating a guestlist array

let guestList = ["Sadia","Anam","Ather","Ahson"];

let dontCome = guestList[0];

console.log(dontCome, "Nhi Askti Hai");

// Add and Remove values from guestlist array
guestList.splice(0, 1, "Amir");
console.log("Good News ! We have found a bigger table for dinner");

// Adding a new value a starting index of array
guestList.unshift("Ali");

// Adding a new value at ending index of array
guestList.push("Amber");

// Get a middle index of our guest list array

let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Taha");

// print message of updated list
console.log("Updated List of our Guests");

//Sending a message of our guest one by one with their names
guestList.forEach(oneguest => console.log(`Assalam-o-Alaikum ${oneguest}, Would you like to dinner at my home`));

// Invite only two guest for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guest to dinner at my home");

// Using while.loop to remove guests from the until only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry,${removedGuest} I cant invite you to dinner`);
}

// Invitation to last two guests on the list
console.log("Invitations to the last two Guests");

guestList.forEach(lasttwo => console.log(`Congratulations ! ${lasttwo}, You are still invited to Dinner`));

// Removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);