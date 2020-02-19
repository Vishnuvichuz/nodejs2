const db = require("../connector");
const sequelize = require("sequelize");

const category= db.define(
    "category",
    {
        "name":
        {
            type:sequelize.STRING
        },
       
    }
);

module.exports=category;