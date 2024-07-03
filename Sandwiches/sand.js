function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmade a Sandwich with the following items: \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nHave and Enjoy The Sandwich \n");
}
//now calling the function atleast three times with three different arguments
makeSandwich("Paporoni", "Cheese", "Egg");
makeSandwich("Chicken", "Butter", "Vegetable");
makeSandwich("Mayo and Kechup", "Chicken fiber");
