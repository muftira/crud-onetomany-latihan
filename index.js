const express = require("express");
const ProductRoute = require('./routes/ProductRoute')
const CartRoute = require('./routes/CartRoute')

const app = express();

//get data in JSON format
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//import routes

app.use(ProductRoute)
app.use(CartRoute)


//connect to server
app.listen(5000, () => console.log("Server Connected"));
