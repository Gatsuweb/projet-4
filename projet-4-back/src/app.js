
const express = require("express");
const router = require("./router");

const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req,res)=>{
    res.status(201).send("Welcome to my hiking app!");
});



app.use("/api", router);

module.exports = app;
