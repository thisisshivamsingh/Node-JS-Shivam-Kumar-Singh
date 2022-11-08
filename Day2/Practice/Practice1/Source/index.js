const fs = require("fs");

fs.writeFile('./person.txt', 'hello world', (err, data)=>{
    if(err){
        console.log("error 1", err);
    }else{
        console.log("data 1", data);
    }
});

fs.writeFile('./person.txt', 'hello India', (err, data)=>{
    if(err){
        console.log("error 2", err);
    }else{
        console.log("data 2", data);
    }
});