// Array of Current Users
var current_users = ["Ammad", "Ali", "Taha", "Amir", "Zain"];
// Array of New Users
var new_users = ["Anam", "Ayesha", "Taha", "Amir", "Maida"];
// loop through new users to check availability
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using If-Else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
