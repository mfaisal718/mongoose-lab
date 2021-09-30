// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require("mongoose")


//MIDDLEWARE
//BODY PARSAR middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));

//Database connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

const productsControllers = require("./controllers/products.js")
app.use("/products", productsControllers)
// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));