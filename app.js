const express = require("express");
const bodyParser = require("body-parser");
var app= express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/final");
const trySchema = new mongoose.Schema({
    name:String
});
const item = mongoose.model("second",trySchema);
app.get("/",function(req,res){
    item.find({},function(err,foundItems){
            res.render("list",{ejes : foundItems});
    })
});
app.post("/",function(req,res){
    const itemName = req.body.ele1;
    const todo4 = new item({
        name:itemName
    }); 
    todo4.save();
    res.redirect("/");
});

app.listen("2000",function(){
    console.log("Server started");
});