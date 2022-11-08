const express = require("express");
const app = express();

const Students = [
  {
    ID: 1,
    Name: "Reena",
    Address: "Ahmedabad",
    Fees: { Amount: 10000, PaymentDate: "12/12/2020", Status: "true" },
    Result: { Hindi: 80, Eng: 70, Math: 60, Total: 210, Grade: "A" },
  },
  {
    ID: 2,
    Name: "Rita",
    Address: "Surat",
    Fees: { Amount: 12000, PaymentDate: "12/12/2020", Status: "false" },
    Result: { Hindi: 80, Eng: 70, Math: 60, Total: 210, Grade: "A" },
  },
];

app.get("/students/:id/:fees", (req, resp) => {
  const { id, fees } = req.params;
  if (fees) {
    const newApi = Students.filter((elem) => elem.ID == id);
    return resp.send(`<h1>${JSON.stringify(newApi[0].Fees)}</h1>`);
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
