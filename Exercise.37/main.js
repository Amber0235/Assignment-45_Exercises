// Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScipt"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//  function with by default
make_shirt();
// Function with Medium size by default message
make_shirt("Medium");
// Now funcion with small size and another print message
make_shirt("small", "I Love JavaScript");
