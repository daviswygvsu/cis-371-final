const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('views'));

app.get('', (req, res) => {
    res.render("hello", {})
});

app.listen(port, () => console.log(`I'm listening...`));