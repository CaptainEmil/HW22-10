"use strict";

console.clear();

function fibonnachi(n){
    let num1=0;
    let num2=1;
    let numTemp;
    for(let i=0; i<n; i++){
        numTemp=num1+num2;
        num1=num2;
        num2=numTemp;
    }
    return num1;
}



console.log(fibonnachi(16));