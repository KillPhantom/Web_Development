var express= require("express");
var router = express.Router();
var Carground =require("../models/carground");
var middleware  = require("../middleware"); //index.js is a special name will automatically get 

//INDEX - show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Carground.find({}, function(err, allCargrounds){
       if(err){
           console.log(err);
       } else {
          res.render("cargrounds/index",{carground:allCargrounds,currentUser:req.user});
       }
    });
});

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn,function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var price = req.body.price;
    var author ={
        id :req.user._id,
        username:req.user.username
    }
    var newCarground = {name: name, image: image, price:price,description: desc,author:author}
    
    // Create a new campground and save to DB
    Carground.create(newCarground,function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/cargrounds");
        }
    });
});

//NEW - show form to create new campground
router.get("/new",middleware.isLoggedIn, function(req, res){
   res.render("cargrounds/new"); 
});

// SHOW - shows more info about one campground
router.get("/:id",function(req, res){
    //find the carground with provided ID
    Carground.findById(req.params.id).populate("comments").exec(function(err, foundCarground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCarground)
            //render show template with that campground
            res.render("cargrounds/show", {carground: foundCarground});
        }
    });
})


//EDIT ROUTE

router.get("/:id/edit",middleware.checkCargroundOwnerShip,function(req,res){
    // is user loggedin?
        Carground.findById(req.params.id,function(err,foundCarground){
                if(err){
                    res.redirect("back")
                }else{
                    res.render("cargrounds/edit",{carground:foundCarground});
                }
    });
});

//UPDATE ROUTE
router.put("/:id",middleware.checkCargroundOwnerShip,function(req,res){
    //find and update the correct carground

    Carground.findByIdAndUpdate(req.params.id,req.body.carground, function(err,updatedCarground){
        if(err){
            res.redirect("/cargrounds");
        }else{
            res.redirect("/cargrounds/"+req.params.id);
        }
    })
    //redirect to show page
})


//DESTROY ROUTE
router.delete("/:id",middleware.checkCargroundOwnerShip,function(req,res){
    Carground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/cargrounds")
        }else{
            req.flash("success","Successfully deleted!");
            res.redirect("/cargrounds")
        }
    })
})












module.exports=router;