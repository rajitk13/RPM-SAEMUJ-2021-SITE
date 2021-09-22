//DEVELOPER RAJIT KUTHIALA
// Prerequisites
const express = require('express');
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const ejs = require('ejs');
var _ = require('lodash');
const app = express();
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//connecting to database (mongodb free database)
mongoose.connect('mongodb+srv://RAJIT:rpmsite123@rpm-site.64o2n.mongodb.net/rpmDB', {useNewUrlParser: true,useUnifiedTopology: true});
//creating data base schema and const
const contactUsSchema = new Schema({
  name:String,
  email:String,
  msg:String
});

const Contact = mongoose.model('Contact',contactUsSchema);

app.use(express.urlencoded({extended:true}));
//Using static css file
app.use(express.static('public'));
//Serving up the home page
app.get("/",function(req,res){
  res.render("home");
});
//Serving up the tehcnical-sessions page
app.get("/technical-sessions",function(req,res){
  res.render("technical-sessions");
});
//Serving Up our-team page
app.get("/our-team",function(req,res){
  res.render('our-team');
});
//Serving Up Join-us page
app.get("/membership",function(req,res){
  res.render('membership');
});

//saving contact us details in database

app.post("/",function(req,res){
let contact = new Contact({
  name:req.body.name,
  email:req.body.email,
  msg:req.body.message
});
contact.save(function(err){
  if(err){console.log(err);}
});
res.redirect("/");

});
//Serving up rpm-x-rpx event site
app.get("/rpm-x-rpx",function(req,res){
  res.render('rpm-x-rpx');
});

// UNDEFINAED PATH 404 Error
app.get("*",function(req,res){
  res.render('404');
});
//PORT LOCAL HOST & HEROKU COMPATIBLE
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started succesfully");
});
