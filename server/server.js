const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const PORT = 3000;

const User = require("./models/user");

mongoose.connect(process.env.DATABASE, 
    { useUnifiedTopology: true, useUnifiedTopology: true }, 
    (err) => {
    if (err) {console.log(err)}
    else {console.log('connected to the database')}
})

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.bodyParser({limit: '50mb'}));
app.use(cors());

// const productRoutes = require("./routes/product");
// app.use("/api", productRoutes);

const userRoutes = require('./routes/auth');
app.use(userRoutes);
// app.use('/api', userRoutes);

const burgerRoutes = require('./routes/burger');
app.use(burgerRoutes);
// app.use('/api', burgerRoutes);

// app.listen(PORT, (err) => {
//     if (err) {console.log(err)}
//     else {console.log("listening on PORT:", PORT)}
// });

module.exports = {
    path: "/api",
    handler: app
}