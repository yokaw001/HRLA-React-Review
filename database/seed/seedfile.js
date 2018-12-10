const db = require("../index.js");

const newData = [
    {
        task: "Go for it",
        name: "jon",
        age: 21
    },
    {
        task: "Git it",
        name: "jann",
        age: 2
    },
    {
        task: "play",
        name: "jin",
        age: 213
    }
];

let insertData = function () {
    db.insertMany(
        newData
    )
};
insertData(); // gotta invoke it 
