// Array of Current Users
let current_users = ["Ammad", "Ali", "Taha", "Amir","Zain"]

// Array of New Users
let new_users = ["Anam","Ayesha","Taha","Amir","Maida"]

// loop through new users to check availability
new_users.forEach(new_one_user => {

let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print different messages using If-Else statement
    if(our_condition){
console.log(`Sorry ${new_one_user} is already taken!`)
}else{
    console.log(`This username ${new_one_user} is available`)
}
})
