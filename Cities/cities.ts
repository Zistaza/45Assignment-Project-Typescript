function describe_cities(city:string, country:string = "Default country."){
    console.log(`${city} is in ${country}`);
}

describe_cities("Istanbul");

describe_cities("Cairo" , "Egypt");

describe_cities("Kabul" , "Afghanistan");

describe_cities("Karachi" , "Pakistan");