const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const { registerUser, login } = require("./controller");

const port = 3001;

const app = express();
app.use(json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.post("/api/registerUser", registerUser);
app.post("/api/login", login);

app.listen(port, console.log(`listening on port ${port}`));
