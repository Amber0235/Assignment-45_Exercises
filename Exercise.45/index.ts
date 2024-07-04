// Define a function to create a car object
function car_create(manufacturer , model, ...options){
// Initialize a car object with manufacturer and model
let car = {
    manufacturer: manufacturer,
    model: model,
};
// Add additional options to the car object
options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});
return car; 
}

// Function to create a car object

let my_Car = car_create("Civic", "Honda", "color: Silver","Year:2023","Sunroof: False");

// Print variable to information correctly in the car object

console.log(my_Car);