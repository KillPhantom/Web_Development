var express=require("express"),
    mongoose = require("mongoose"),
    passport=require("passport"),
    bodyParser =require("body-parser"),
    LocalStrategy = require("passport-local"),
    User=require("./models/user"),
    passportLocalMongoose = require("passport-local-mongoose");
    
    
mongoose.connect("mongodb://localhost:27017/auth_demo",{ useNewUrlParser: true });
var app=express();
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret:"Blah Blah Blah For the nitlle!",
    resave:false,
    saveUninitialized :false
}));


app.use(passport.initialize());
app.use(passport.session());

//This is added from user.js from UserSchema
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));// tell passport to use local user which defined in user.js





//=========================
//ROUTE
//=========================
app.get('/',function(req,res){
    res.render("home");
})

app.get("/secret", isLoggedIN,function(req,res){
    res.render("secret")
})

//show Sign Up from
app.get("/register",function(req, res) {
    res.render("register");
})
//Handling user sign up

app.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
        res.redirect('/secret');
        });
    })
});

//LOGIN ROUTES
// RENDER LOGIN FORM

//middleware  ** some code run before give a request
app.get("/login",function(req, res) {
    res.render("login")
})

app.post("/login",passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect:"/login"
}),function(req,res){

});

app.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/");
})



function isLoggedIN(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started!!!")
})