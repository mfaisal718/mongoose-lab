// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require("mongoose")
const products = require("./models/products.js")

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
// Index - display all books
app.get('/products', (req, res) => {
    products.find({}, (error, allProducts) => {
        res.render('index.ejs', {
            products: allProducts,
        });
    });
});
// New - display form to add a new book
app.get("/products/new", (req, res) => {
    // res.send to check route
    // res.send("new");
    res.render("new.ejs");
});


// Delete - delete a single book

// Update - update a single book

// Create - create a new book
app.post("/products", (req, res) => {
    if (req.body.completed === 'on') {
        //if checked, req.body.completed is set to 'on'
        req.body.completed = true;
    } else {
        //if not checked, req.body.completed is undefined
        req.body.completed = false;
    }

    //res.send(req.body)

    products.create(req.body, (error, createdProducts) => {
        res.send(createdProducts)
    });
});
// Edit - display form to update a book

// Show - display a single book
// Show
app.get('/products/:id', (req, res) => {
    products.findById(req.params.id, (err, foundProducts) => {
        //res.send(foundBook);
        res.render('show.ejs', {
            products: foundProducts,
        });
    });
});
// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));