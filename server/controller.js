// const express = require('express');
// const parser = require('body-parser');
// const path = require('path');
const db = require('../database/index.js')


//connect to database index
module.exports = {
    get: (req, res) => {
        console.log('get get get')
        //run database functions through the above db variable
        db.find({}, (err, data) => {
            if (err) {
                console.log("error: ", err)
            } else {
                res.status(200).send(data)
            }
        })
    },
    post: (req, res) => {
        const task = req.body.task;
        new db({
            task
        }).save((err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.status(201).send(data)
            }
        })
        console.log("post malone!")
    },
    delete: (req, res) => {
        console.log("in delete");
        const str = req.body.task;
        db.deleteOne({ task: str }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.status(202).send("deleted");
            }
        })
    }
}