const express= require('express');
const app= express();
const port= 9000;

var cors= require ('cors')


app.use(cors())

const details = require('./data/Details.json')



app.get('/details', (req, res)=>{
    res.send(details);
})
app.get("/singleChefData/:id" , (req,res)=>{
    const id = req.params.id
    console.log(id)
    const singleItem =details.find(data => data.id == id)
    res.send(singleItem)
    
    
})
app.listen(port, ()=>{
    console.log("example app test")
}
)