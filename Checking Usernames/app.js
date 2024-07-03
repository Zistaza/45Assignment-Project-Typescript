var current_users = ["Ferry", "shah", "Sikandar", "Sajid", "Sameer", "Sahir"];
var new_users = ["Jerry", "Shah", "Salma", "Zahid", "Ferry", "Fajar"];
//loop through
new_users.forEach(function (new_one_user) {
    var my_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (my_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available!"));
    }
});
