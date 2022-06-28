const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async(req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.send("Error: "+err);
    }
    
})

router.get("/:id", async(req, res) => {

    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch(err) {
        res.send("Error: "+err);
    }
    
})

router.post("/", async(req, res) => {

    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    });

    try {
        const createdUser = await newUser.save();
        res.json(createdUser);
    } catch(err) {
        res.send("Error: "+err);
    }
    
})

router.patch("/:id", async(req, res) => {

    try {
        const user = await User.findById(req.params.id);
        user.username = req.body.username;
        user.password = req.body.password;
        user.name = req.body.name;
        user.phone = req.body.phone;
        user.email = req.body.email;
        const editedUser = await user.save();
        res.json(editedUser);
    } catch(err) {
        res.send("Error: "+err);
    }
    
})

router.delete("/:id", async(req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const result = await User.remove(user);
        res.json(result);
    } catch(err) {
        res.send("Error: "+err);
    }
    
})

module.exports = router;