// Create an array
let userNames = ["Ather","Ahson","Saad","Admin","Taha"];

// Using forEach Loop an Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)

    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})

