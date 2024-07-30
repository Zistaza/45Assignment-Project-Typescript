"use strict";
function makeSandwich(...items) {
    console.log("\nmade a Sandwich with the following items: \n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\nHave and Enjoy The Sandwich \n");
}
//now calling the function atleast three times with three different arguments
makeSandwich("Paporoni", "Cheese", "Egg");
makeSandwich("Chicken", "Butter", "Vegetable");
makeSandwich("Mayo and Kechup", "Chicken fiber");
