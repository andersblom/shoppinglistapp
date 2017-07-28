'use strict';
var express = require("express");
var router = express.Router();
const User = require("./model/user");

router.route('/user/:username')
    .get((req, res) => {
        User.findOne({ 'username': req.params.username}, (err, user) => {
            if (err) {
                res.send(err);
            }
            if (!user) {
                res.json({error: `User '${req.params.username}' was not found`});
            } else {
                if (user.username === req.params.username) {
                    res.json(user);
                }
            } 
        });
    })
    .post((req, res) => {
        User.findOne({ 'username': req.params.username }, (err, user) => {
            if (err) {
                res.send(err);
            }
            if (!user) {
                let userToBeAdded = new User();
                userToBeAdded.username = req.body.username;
                userToBeAdded.isPro = req.body.isPro;
                userToBeAdded.password = req.body.password;
                userToBeAdded.email = req.body.email;
                userToBeAdded.createdAt = req.body.createdAt;

                userToBeAdded.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    res.status(200).json({
                        message: "User was created"
                    });
                });
            } else if (user) {
                res.status(400).json({
                    error: {
                        message: "User already exists"
                    }
                });
            }
        })
    })
;


module.exports = router;