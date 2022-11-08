const express = require("express");
const app = express();

const api = [
  {
    id: 1,
    name: "shivam",
    city: "jaipur",
    status: "active",
  },
  {
    id: 2,
    name: "shubham",
    city: "kota",
    status: "active",
  },
  {
    id: 3,
    name: "aakash",
    city: "chittorgarh",
    status: "active",
  },
];

app.get("/customer", (req, resp) => {
  const { name } = req.query;
  if (name) {
    const newApi = api.map((item) => {
      if (item.id == 1) {
        return { ...item, name: name };
      }
      return item;
    });
    return resp.send(`<h1>${JSON.stringify(newApi)}</h1>`);
  }
  return resp.send(`<h1>${JSON.stringify(api)}</h1>`);
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
