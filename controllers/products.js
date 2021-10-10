// Require and set up Dependencies
const express = require("express");
const productsRouter = express.Router();
const products = require("../models/products.js");
const productsSeed = require('./models/productsSeed.js');

//ROUTES
// seed

app.get('/products/seed', (request, response) => {
    Products.deleteMany({}, (error, allProducts) => { })
    Products.create(productsSeed, (error, data) => {
        response.redirect('/products')
    })
})
// INDEX
productsRouter.get("/", (req, res) => {
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
productsRouter.get('/:id', (req, res) => {
    products.findById(req.params.id, (err, foundProducts) => {
        res.render('show.ejs', {
            products: foundProducts,
        });
    });
});
// Export functionality
module.exports = productsRouter;