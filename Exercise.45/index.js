// Define a function to create a car object
function car_create(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Function to create a car object
var my_Car = car_create("Civic", "Honda", "color: Silver", "Year:2023", "Sunroof: False");
// Print variable to information correctly in the car object
console.log(my_Car);
