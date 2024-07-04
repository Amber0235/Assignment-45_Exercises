let userNames = ["Ather","Ahson","Zeeshan","Fahad","Admin"];

userNames = []

if(userNames.length === 0){
    console.log("We need to find some users.Your array is empty!")
}else{
// Using forEach Loop an Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)

    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})
    }

