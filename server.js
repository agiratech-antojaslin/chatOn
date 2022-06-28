const express = require("express");
const mongoose = require("mongoose");
const { use } = require("./routes/users");
const app = express();
const url = "mongodb://localhost/chatOn";

mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;
con.on("open", () => {
    console.log("Connected...")
})

const usersRouter = require("./routes/users");

app.use(express.json());

app.use("/users", usersRouter);

app.listen(3000, () => { console.log("App is running on port 3000") });