const dbConnect=require('./mongodb')
const express=require('express');
const app=express();
app.use(express.json());
//fetch API
app.get('/',async(req,res)=>{
 let result=await dbConnect();
 result=await result.find().toArray();
 res.send(result);
}
)
//post API
app.post('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.insertOne(req.body);
    res.send("Data inserted Successfully");
})

//update API
app.put('/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data updated successfully");
})
 //delete API 
 app.delete('/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne({name:req.params.name});
    res.send("Data deleted succesfully");
 })
app.listen(4000);
