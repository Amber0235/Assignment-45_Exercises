// Define a function with a rest parameter
function make_sandwich(...items: string[]){
console.log("\nMaking a sandwich with the following items: \n");

items.forEach(singleItem => console.log("-" + singleItem));

console.log("\nNow Enjoy Sandwich");

}

// Call the function three times with different arguments

make_sandwich("Bread","Chicken","Cheese","Sausages","Mayonesse");

make_sandwich("Bread","Egg", "Mayonesse", "Iceburg","Black Pepper","Cucumber");

make_sandwich("Bread","Beef","Mayonesse","Cheese","Egg","Lettuce");