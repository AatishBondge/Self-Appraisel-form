const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());
const products = [
    {
    	id: 1,
    	userName : "Aatish Bondge",
    	emialId : "aatish.bondge@objectedge.com",
    	password : "12345",
    	userRole : "Jr.Developer",
    	managerId : 1
    },
    {
    	id: 2,
    	userName : "Aatish Bondge",
    	emialId : "aatish.bondge@objectedge.com",
    	password : "12345",
    	userRole : "Jr.Developer",
    	managerId : 1
    },
    {
    	id: 3,
    	userName : "Aatish Bondge",
    	emialId : "aatish.bondge@objectedge.com",
    	password : "12345",
    	userRole : "Jr.Developer",
    	managerId : 1
    },
    {
    	id: 4,
    	userName : "Aatish Bondge",
    	emialId : "aatish.bondge@objectedge.com",
    	password : "12345",
    	userRole : "Jr.Developer",
    	managerId : 1
    },
    {
    	id: 5,
    	userName : "Aatish Bondge",
    	emialId : "aatish.bondge@objectedge.com",
    	password : "12345",
    	userRole : "Jr.Developer",
    	managerId : 2
    },
];
app.get('/', function(req, res){
    res.send("hello");
});

 app.get('/api/product',(req, res) =>{
     res.send(products);
 });

 app.get('/api/product/:id', (req, res) => {
    let product = products.find(ob => ob.id === parseInt(req.params.id));
    
   
    if (!product)
        res.status(404).send("the product with given id was not found ");
    res.send(product);
 });

 app.post('/api/product', (req, res) => {
    
    const result = validateProduct(req.body);

     if(result.error){
         res.status(400).send(result.error);
         return;
     }

     const newProduct = {
         id: products.length + 1,
         name: req.body.name
     };
     products.push(newProduct);
     res.send(result);

 });

 app.put('/api/product/:id', (req, res)=>{
    let product = products.find(ob => ob.id === parseInt(req.params.id));
    if (!product)
        res.status(404).send("the product with given id was not found ");

    
    const { error } = validateProduct(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    product.name = req.body.name;
    res.send(product);
 });

function validateProduct (product){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(product, schema);
}


const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("listening on port :"+port);
});