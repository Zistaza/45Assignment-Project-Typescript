"use strict";
//function
function make_shirt(size = "large", text = "I love Typescript.") {
    console.log(`I am creating a ${size} shirt with the message: ${text}`);
}
//call function
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love Javascript");
