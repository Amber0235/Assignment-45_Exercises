// Making an array of countries and print its original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitCountries = ["Japan", "America", "Canada", "Thailand", "Bharain"];
console.log("Original Order:", visitCountries);
// Print array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], visitCountries, true).sort());
// Array is still in original order
console.log("Still in Original order:", visitCountries);
// Array in reversed order without madifying the actual array list
console.log("Reverse Order:", __spreadArray([], visitCountries, true).reverse());
// Array is still in original order
console.log("Still in Original Order:", visitCountries);
// change the original array order
console.log("Original Array Reversed:", visitCountries.reverse());
// Its back to its original order
console.log("Back to Original Order:", visitCountries.reverse());
// print the array to show that in alphabetical order
console.log("Sorted in Alphabetic Order:", visitCountries.sort());
// change again the original array order and reverse order again
console.log("Original Array Reversed Again:", visitCountries.reverse());
