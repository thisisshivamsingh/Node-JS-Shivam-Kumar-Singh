const a = 5;
const b = 5;

const expression = "add";

let ans = 0;

switch(expression){
    case "sum":
        ans = a + b;
        break;
    case "substract":
        ans = a - b;
        break;
    case "multiplication":
        ans = a * b;
        break;
    case "division":
         ans = a / b;
        break;
    default:
        ans = "Nothing is Matched.";            
}

console.log(ans);