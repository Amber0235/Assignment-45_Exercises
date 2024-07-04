// Define a function with a rest parameter
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function three times with different arguments
make_sandwich("Bread", "Chicken", "Cheese", "Sausages", "Mayonesse");
make_sandwich("Bread", "Egg", "Mayonesse", "Iceburg", "Black Pepper", "Cucumber");
make_sandwich("Bread", "Beef", "Mayonesse", "Cheese", "Egg", "Lettuce");
