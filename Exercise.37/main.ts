// Making a function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScipt"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)

}

//  function with by default
make_shirt();

// Function with Medium size by default message
make_shirt("Medium")

// Now funcion with small size and another print message

make_shirt("small", "I Love JavaScript")