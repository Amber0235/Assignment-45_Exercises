// Create a function
function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);

}

// calling function

describe_city("Karachi");
describe_city("Islamabad");
describe_city("Quetta");

describe_city("Sharjah","Dubai");