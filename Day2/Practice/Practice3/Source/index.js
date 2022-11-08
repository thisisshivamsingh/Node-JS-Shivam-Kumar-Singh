const fs = require("fs");

fs.writeFile("./randomA.txt", "hello world!", (err, data) => {
    if(err){
        console.log("error 1", err);
    } else {
        console.log("data 1", data)
    }
});

fs.writeFile("./randomB.txt", "hello world again!", (err, data) => {
    if(err){
        console.log("error 2", err);
    } else {
      console.log("data 2", data);  
    }
})


fs.readFile("./randomA.txt", 'UTF-8', async (err, data)=>{
    try{
        const newData = await data;
        console.log(newData);
    }
     catch(err){
        console.log(err);
     }
})

fs.readFile("./randomB.txt", 'UTF-8', async (err, data)=>{
    try{
        const newData = await data;
        console.log(newData);
    }catch(err){
        console.log(err);
    }
})