var express= require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});






//====================
//Auth Route
//====================

//show register form
router.get("/register",function(req, res) {
    res.render("register");
})

router.post("/register",function(req, res) {
    var newUser = new User({username:req.body.username})
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            req.flash("error",err.message); //err handle all the possible case 
            
            return res.redirect('/register')
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success","Welcome!"+ user.username);
            res.redirect("/cargrounds")
        })
    })
})

//==================
// show login form
//==================
router.get("/login", function(req, res) {
    res.render("login")
})

router.post("/login",passport.authenticate("local",
    {   
        successRedirect:'/cargrounds',
        failureRedirect:"/login"
    }),function(req,res){
        req.flash("success","Successfully logged in ")
    });
//==================
// logout route
//==================
router.get("/logout",function(req, res) {
    req.logout();
    req.flash("success","Successfully logged out ")
    res.redirect("/cargrounds");
});



module.exports=router;