const fs = require("fs");
const input = process.argv;

fs.writeFileSync("person.txt", `hello ${input[2]}`);