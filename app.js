// jshint esversion:6
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const passport=require("passport");
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://apiv2.shiprocket.in/v1/external/auth/login',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "email": "cu.riteshsingh@gmail.com",
    "password": "Ritesh@22"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body.token);
});



app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.render("index");
})
app.post("/shop",function(req,res){
    res.render("shop")
})
app.listen(3001,function(){
    console.log("server started posrt 3000");
});