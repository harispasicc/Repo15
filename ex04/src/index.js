const milili = [10, 25, 4];

function myArr(mili){
    'use strict';
    const shift = milili.shift();
    const shift1 = milili.shift();
    const push = milili.push(10);
    const push1 = milili.push(25);
    console.log(milili);
}

myArr();
module.exports = myArr;