const input = process.argv;

class Mobike {
  constructor(bikeNumber, phoneNumber, name, days) {
    this.bikeNumber = bikeNumber;
    this.phoneNumber = phoneNumber;
    this.name = name;
    this.days = days;
  }
  compute(x) {
    let totalRent = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    if (x > 10) {
      a = 200 * (x - 10);
      b = 400 * 5;
      c = 500 * 5;
      totalRent = a + b + c;
    } else if (x > 5) {
      a = 400 * (x - 5);
      b = 500 * 5;
      totalRent = a + b;
    } else {
      a = 500 * x;
      totalRent = a;
    }
    return {
      bikeNumber: this.bikeNumber,
      phoneNumber: this.phoneNumber,
      days: this.days,
      totalRent,
    };
  }
}
let days = parseInt(input[5]);
let userDet = new Mobike(input[2], input[3], input[4], days);

module.exports = userDet.compute(days);
