let myName;
let message;

myName = "Padawans";
function myMsg(name) {
    "use strict";
    message = "Hello, " + myName + "!";

    return message;
}

console.log(myMsg(message));

module.exports = myMsg;