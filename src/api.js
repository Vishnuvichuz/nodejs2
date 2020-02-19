const express = require("express")
const Product = require("./database/models/product")
const Manufacture = require("./database/models/manufacture")
const Category = require("./database/models/category")
const Properties = require("./database/models/properties")
const Cart = require("./database/models/cart")


const router =express.Router();


router.get('/',(req,res) => {
    Product.findAll({
        include: [{model:Manufacture}]
    }).then(res1 => {
        res.json(res1);
    });
});


//Product 
router.post("/add_product",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newPdt = {
             name:req.body.name,
             price:req.body.price
         };

        let newManu=req.body.Manufacture;
        let newCat =req.body.Category;

        Product.create(newPdt).then(pdt => { 

                Manufacture.findOne( {where: {id:newManu}}).then(resManu =>{
                        pdt.setManufactures(resManu);
                        console.log("saved");
                });   

                Category.findOne( {where: {id:newCat}}).then(resCat =>{
                        pdt.setManufactures(resCat);
                        console.log("saved");
                });

             }
    )}
    res.json({status:"executed"});      
});




//Manufacture
router.post("/add_manufacture",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newMan = {
            name:req.body.name,  
        };
        Manufacture.create(newMan).then(man => {
            console.log("Saved");
        })
    
        res.json({status:"executed"});  
        }
});

//Category
router.post("/add_category",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newCat = {
            name:req.body.name,  
        };
        Category.create(newCat).then(cat => {
        console.log("Saved");
    })
    
    res.json({status:"executed"});  
    }
    });

//Properties
router.post("/add_properties",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newProperty = {
         name:req.body.name,  
        };
        Properties.create(newProperty).then(pro => {
            console.log("Saved");
        })
    
        res.json({status:"executed"});  
        }
});


//Cart
router.put("/add_to_cart",(req,res) => {
    if(req.body !=null) {

    }
});

module.exports = router;
