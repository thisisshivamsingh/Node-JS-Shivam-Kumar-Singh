const input = process.argv;

let length = parseInt(input[2]);
let breadth = parseInt(input[3]);

const areaOfRectangle = length * breadth;

const perimeterOfRectangle = 2 * (length + breadth);

module.exports.areaOfRect = areaOfRectangle;
module.exports.perimeterOfRect = perimeterOfRectangle;
