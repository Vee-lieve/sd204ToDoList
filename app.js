const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const database = require("./services/database");
const ToDosRouter = require("./routes/todos");

app.use(bodyParser.json());
// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use('/static', express.static(path.join(__dirname, 'src')))
app.use(bodyParser.urlencoded({extended: true}));
database.connect();
app.use("/", ToDosRouter);

app.listen(3000, console.log("Server running on port 3000"));