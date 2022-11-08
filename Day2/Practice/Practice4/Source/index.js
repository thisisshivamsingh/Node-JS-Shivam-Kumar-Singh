const fs = require("fs");

fs.writeFile("./one.txt", "charbhuja, Rawatbhata, 323307, Raj.", (err, data) => {
    if (err) {
        console.log("error 2", err);
    } else {
        console.log("data 2", data);
    }
})

fs.readFile("./one.txt", "UTF-8", (err, data) => {
    if (err) {
        console.log("error 3", err);
    } else {
        console.log(data.replaceAll(" ", "").replaceAll("323307", "").replaceAll(",", "").replaceAll(".", "").toUpperCase().split("").filter((elem) => !(elem == "A" || elem == "E" || elem == "I" || elem == "O" || elem == "U")).length);
    }
});

fs.unlink("./person.txt", (err, data) => {
    if (err) {
        console.log("error 4", err);
    } else {
        console.log("data 4", data);
    }
})