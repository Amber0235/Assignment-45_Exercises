// Create an array
var userNames = ["Ather", "Ahson", "Saad", "Admin", "Taha"];
// Using forEach Loop an Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
    }
});
