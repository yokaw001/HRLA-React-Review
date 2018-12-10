const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newlist", {
    useNewUrlParser: true
});

let db = mongoose.connection;

db.on("error", () => { console.log("error on: ", error) })
db.once("open", () => { console.log("successfully connected to mongoDB") })

const List = mongoose.Schema({
    task: String,
    name: String,
    age: Number
});

const Todo = mongoose.model("Todo", List);

// here a new instance 

module.exports = Todo;