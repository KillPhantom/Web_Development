// all middleware gose here
var Carground = require("../models/carground");
var Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCargroundOwnerShip = function(req,res,next){
        // is user logged in ?
        if(req.isAuthenticated()){
        
        Carground.findById(req.params.id,function(err,foundCarground){
            if(err){
                res.redirect("back");
            }else{
                // Added this block, to check if foundCampground exists, and if it doesn't to throw an error via connect-flash and send us back to the homepage
            if (!foundCarground) {
                    req.flash("error", "Item not found.");
                    return res.redirect("back");
                }
            // If the upper condition is true this will break out of the middleware and prevent the code below to crash our application
 
                //does user own this card?
                // foundCarground.author.id  is a mongoose object 
                // req.user._id  is a String
                if(foundCarground.author.id.equals(req.user._id)){
                     next();
                }else{
                    req.flash("error","Permission Denied");
                    res.redirect("back");
                }
            }
    })
    }else{
        req.flash("error","You need to logged in ");
        res.redirect("back");
    }
}


middlewareObj.checkCommentOwnerShip=function(req,res,next){
        if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id,function(err,foundComment){
                if(err){
                    req.flash("error","Carground not found");
                    res.redirect("back");
                }else{
                    
                                // Added this block, to check if foundCampground exists, and if it doesn't to throw an error via connect-flash and send us back to the homepage
                    if (!foundComment) {
                            req.flash("error", "Item not found.");
                            return res.redirect("back");
                        }
            // If the upper condition is true this will break out of the middleware and prevent the code below to crash our application
 
                    //does user own this comment?
                    // foundCarground.author.id  is a mongoose object 
                    // req.user._id  is a String
                    if(foundComment.author.id.equals(req.user._id)){
                         next();
                    }else{
                        req.flash("error","Permission Denied");
                        res.redirect("back");
                    }
                    
                }
        })
    }else{
        req.flash("error","You need to be logged in ")
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You have to login first")
    res.redirect('/login')
}

module.exports = middlewareObj;