const express = require('express');
const dbconnect = require('./Config/db');
const ProductRoute = require('./Routes/Product.Router');
const app = express();

app.use(express.json());
require("dotenv").config();

app.use("/Products",ProductRoute)

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    dbconnect();
});