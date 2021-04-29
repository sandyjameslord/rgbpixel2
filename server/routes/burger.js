const router = require('express').Router();
const Burger = require("../models/burger");

const upload = require("../middleware/upload-photo");

// get all burgers
router.get("/burgers", async (req, res) => {
    try {
        let burgers = await Burger.find();
        res.json({success: true, burgers: burgers})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// //get single product by :id
// router.get("/burgers/:id", async (req, res) => {
//     try {
//         let product = await Product.findOne({ _id: req.params.id});
//         res.json({success: true, product: product})
//     } catch (err) {
//         res.status(500).json({success: false, message: err.message})
//     }
// });


// post single product
router.post("/burger/burgerPost", async (req, res) => {
    try {
        let burger = new Burger();
        burger.burgerString = req.body.burgerString;
        burger.burgerTitle = req.body.burgerTitle;
        burger.burgerCreator = req.body.burgerCreator;
        burger.burgerStatus = req.body.burgerStatus;

        await burger.save();

        res.json({success: true, message: "burger successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// // update single product
// router.put("/burgers/:id", upload.single("photo"), async (req, res) => {
//     try {
//         let product = await Product.findOneAndUpdate(
//             { _id: req.params.id },
//             { $set: {
//                 title: req.body.title,
//                 description: req.body.description,
//                 photo: req.file.location,
//                 price: req.body.price
//             }},
//             { upsert: true }
//         );
        
//         res.json({success: true, updatedProduct: product})
//     } catch (err) {
//         res.status(500).json({success: false, message: err.message})
//     }
// });

// // delete single product
// router.delete("/products/:id", async (req, res) => {
//     try {
//         let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id});
//         if (deletedProduct) {
//             res.json({success: true, message: "Product successfully deleted."})
//         }
//         res.json({success: true, product: product})
//     } catch (err) {
//         res.status(500).json({success: false, message: err.message})
//     }
// });

module.exports = router;