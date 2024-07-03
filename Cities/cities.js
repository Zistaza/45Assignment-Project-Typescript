function describe_cities(city, country) {
    if (country === void 0) { country = "Default country."; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_cities("Istanbul");
describe_cities("Cairo", "Egypt");
describe_cities("Kabul", "Afghanistan");
describe_cities("Karachi", "Pakistan");
