// Require and set up Dependencies
const express = require("express");
const productsRouter = express.Router();
const products = require("../models/products.js");

//ROUTES
// INDEX
productsRouter.get("/", (req, res) => {
    // original send route to check if working
    // res.send("index");
    // test to show "name"
    // res.render("index.ejs",{name: 'Paul'});
    products.find({}, (error, allProducts) => {
        res.render('index.ejs', {
            products: allProducts,
        });
    });
});
// NEW
//productsRouter.get("/new", (req, res) => {
// res.send to check route
// res.send("new");
//res.render("new.ejs");
//});
// DELETE
//productsRouter.delete("/:id", (req, res) => {
//products.findByIdAndDelete(req.params.id, (err, data) => {
//res.redirect('/products');
//});
//})
// UPDATE
//productsRouter.put('/:id', (req, res) => {
//if (req.body.completed === 'on') {
//if checked, req.body.completed is set to 'on'
//req.body.completed = true;
//} else {
//if not checked, req.body.completed is undefined
//req.body.completed = false;
//}
//products.findByIdAndUpdate(req.params.id, req.//body, {
//new: true
//}, (error, updatedProducts) => {
//res.redirect(`/products/${req.params.id}`);
// });
//});
// CREATE
productsRouter.post("/", (req, res) => {
    console.log('post create route hit')


    //res.send(req.body);
    console.log(req.body)
    products.create(req.body, (error, createdProducts) => {
        console.log(error)
        res.redirect('/products')
    })
});

// EDIT
//productsRouter.get('/:id/edit', (req, res) => {
//products.findById(req.params.id, (error, foundProducts) => {
//res.render('edit.ejs', {
//products: foundProducts
//});
// });
//});
// SHOW
//productsRouter.get('/:id', (req, res) => {
//products.findById(req.params.id, (err, foundProducts) => {
//res.render('show.ejs', {
//products: foundProducts,
//});
//});
//});
// Seed
//const productsSeed = require('./models/productsSeed.js');

//app.get('/products/seed', (req, res) => {
//	products.deleteMany({}, (error, allProducts) => {});

//	products.create(productsSeed, (error, data) => {
//		res.redirect('/products');
//	});
//});
// Export functionality
module.exports = productsRouter;