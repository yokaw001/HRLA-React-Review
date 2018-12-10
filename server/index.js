const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./router.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../static')));
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}))


app.use('/', router);

app.listen(PORT, (err) => {
    if (err) {
        console.log("connection error:", err)
    } else {
        console.log("connected from 93'til ", PORT)
    }
})