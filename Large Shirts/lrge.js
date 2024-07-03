//function
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love Typescript."; }
    console.log("I am creating a ".concat(size, " shirt with the message: ").concat(text));
}
//call function
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love Javascript");
