const express = require("express");

const db = require("./db")
const app = express();
const Comp = require('./models/compModel')
app.use(express.json());

const compsRoute = require('./routes/compsRoute')

app.use('/api/comps/', compsRoute)
const userRoute = require('./routes/userRoute')
app.use('/api/users/', userRoute)
app.get("/", (req, res) => {
    res.send("Server working");
});


app.use(express.static('public'));
app.use('/images', express.static('images'));

const port = process.env.PORT || 5000;
app.listen(port, () => 'Server running');