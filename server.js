require('dotenv').config()

const { render } = require('ejs');
const { request, response } = require('express');
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const products = require('./models/products.js')
const productsSeed = require('./models/productsSeed')
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

// Error / success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected '));
db.on('disconnected', () => console.log('mongod disconnected'));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => console.log('express is listening on:', PORT));


