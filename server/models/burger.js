const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurgerSchema = new Schema({
    burgerString: String,
    burgerTitle: String,
    burgerCreator: String,
    burgerStatus: String,
});

module.exports = mongoose.model("Burger", BurgerSchema);