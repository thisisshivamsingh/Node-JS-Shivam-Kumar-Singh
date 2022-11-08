const fs = require('fs');

const input = process.argv;

let a = parseInt(input[2]);
let b = parseInt(input[3]);

let expression = input[4];

const sum = () => {
    return a + b;
}

const substract = () => {
    return a - b;
}

const multiplication = () => {
    return a * b;
}

const division = () => {
    return a / b;
}

let ans = 0;

switch(expression){
    case "sum":
        ans = sum();
        break;
    case "substract":
        ans = substract();
        break;
    case "multiplication":
        ans = multiplication();
        break;
    case "division":
         ans = division();
        break;
    default:
        ans = "Nothing is Matched.";            
}

fs.writeFile("./demo.txt", String(ans), (err, data) => {
    if(err){
        console.log("Error 1", err); 
 } 
    else {
        console.log("Data 1", data);
    }
    }
)

fs.readFile("./demo.txt", "utf-8", (err, data) => {
    if(err){
        console.log("Error 2", err);
    }else {
        console.log("Data 2", data);
    }
})