var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Carground  = require("./models/carground"),
    Comment     =require("./models/comment"),
    flash       =require("connect-flash"),
    passport    =require("passport"),
    LocalStrategy = require("passport-local"),
    User        = require("./models/user"),
    seedDB      = require("./seed"),
    methodOverride = require("method-override")

var commentRoutes = require("./routes/comments"),
    cargroundRoutes = require("./routes/cargrounds"),
    indexRoutes = require("./routes/index")
    
//mongoose.connect("mongodb://localhost:27017/YelpCamp",{ useNewUrlParser: true });
mongoose.connect("mongodb://mulin:mulin123@ds115411.mlab.com:15411/mulin-test-v1",{ useNewUrlParser: true });


app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname+"/public")) // launched custom stylesheet
app.use(flash());
app.set("view engine", "ejs");
//seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:"Blah Blach Let's have sex",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())


// add a currentUser variable to all of the route
app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})
//============routes
app.use(indexRoutes);
app.use("/cargrounds/:id/comments",commentRoutes);
app.use("/cargrounds",cargroundRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});