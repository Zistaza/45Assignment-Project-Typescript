"use strict";
//variables
let strawberry = "strawberry";
let uppercaseStrawberry = "STRAWBERRY";
let four = 4;
let ten = 10;
let cities = ["Karachi", "Quetta", "Abbotabad", "Hyderabad"];
//equality and inequality test with strings
console.log("Is strawberry is equal to strawberry?");
console.log(strawberry == "strawberry");
console.log("\nIs strawberry is not equal to strawberry?");
console.log(strawberry != "strawberry");
//test using the lowercase function
console.log("\nIs STRAWBERRY is equal to strawberry after converting to lowercase?");
console.log(uppercaseStrawberry.toLowerCase() == "strawberry");
console.log("\nIs STRAWBERRY is not equal to strawberry after converting to lowercase?");
console.log(uppercaseStrawberry.toLowerCase() != "strawberry");
//numerical tests
console.log("\nIs four is equal to ten?");
console.log(four == ten);
console.log("\nIs four is not equal to ten?");
console.log(four != ten);
//test of greator value
console.log("\nIs four is greator than ten?");
console.log(four > ten);
//less than value
console.log("\nIs four is less than ten?");
console.log(four < ten);
//greator than or equal to
console.log("\nIs four is greator than or equal to ten?");
console.log(four >= ten);
//less than or equal to
console.log("\nIs four is less than or equal to ten?");
console.log(four <= ten);
//test using "and" and "or" operators
//&& opertors
console.log("\n four is not equal to ten and four is greator than ten");
console.log(four != ten && four > ten);
console.log("\n four is not equal to ten and four is greator than forty");
console.log(four != ten && four > 40);
// || or opertors
console.log("\n four is greator than 50 OR four is equal to four");
console.log(four > 50 || four == four);
console.log("\n four is greator than 50 OR four is not equal to four");
console.log(four > 50 || four != four);
//wheather an item is include in array
console.log("\nIs Quetta include in my cities array?");
console.log(cities.includes("Quetta"));
console.log("\nIs Hyderabad not include in my cities array?");
console.log(!cities.includes("Hyderabad"));
