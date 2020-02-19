const express = require('express');
const bodyParser = require('body-parser');
const db=require("./database/connector");
const router=require("./api");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/",router);

db.authenticate().then(()=> {
    console.log("db authenticated");
    require("./database/models/schemainitializer");
}).catch((err) => {
    console.error(err);
})



app.listen(port, () => {console.log(`server running on ${port}`)});

//callback