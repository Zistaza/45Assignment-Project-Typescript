var userNames = ["Balaaj", "Saman", "Admin", "Amna", "Bunny"];
userNames = [];
if (userNames.length === 0) {
    console.log("Empty array so find some users!");
}
else {
    for (var i = 0; i < userNames.length; i++) {
        if (userNames[i] === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(userNames[i], ", Thank you for logging in again."));
        }
    }
}