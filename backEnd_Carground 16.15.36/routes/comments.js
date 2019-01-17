var express= require("express");
var router = express.Router({mergeParams: true});
var Carground =require("../models/carground");
var Comment =require("../models/comment");
var middleware  = require("../middleware"); //index.js is a special name will automatically get
//========================
//COMMENT ROUTE
//========================

//Comments New
router.get("/new",middleware.isLoggedIn, function(req, res) {
    //find comments byID
    Carground.findById(req.params.id, function(err,find_carground){
        if(err){
            console.log(err);
            res.redirect("/cargrounds");
        }else{
            res.render("comments/new",{carground:find_carground})
        }
    })
    
})
// Comments created
router.post("/",middleware.isLoggedIn,function(req,res){
    //look up carground using ID
    Carground.findById(req.params.id,function(err, find_carground) {
        if(err){
            req.flash("error","Carground not found");
            console.log(err);
            res.redirect("/cargrounds")
        }else{
            console.log(req.body.comment);
            Comment.create(req.body.comment, function(err,comment){
                if (err){
                    console.log(err)
                }else{
                    // add username and id to comment
                    comment.author.id=req.user._id;
                    comment.author.username=req.user.username;
                    //save comment
                    comment.save();
                    find_carground.comments.push(comment);
                    find_carground.save();
                    req.flash("success","Successfully created");
                    res.redirect("/cargrounds/"+find_carground._id);
                }
            })
        }
    })
    //create new comment
    // connect new comment to carground
    //redirect back
})


//EDIT COMMENT
router.get("/:comment_id/edit", middleware.checkCommentOwnerShip, function(req, res){
   Comment.findById(req.params.comment_id, function(err, foundComment){
      if(err){
          res.redirect("back");
      } else {
        res.render("comments/edits", {carground_id: req.params.id, comment: foundComment});
      }
   });
});

//COMMENT UPDATE
router.put("/:comment_id",middleware.checkCommentOwnerShip,function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment, function(err,updateComment){
        if(err){
            res.redirect("back")
        }else{
            res.redirect("/cargrounds/" +req.params.id);
        }
    });
});

//COMMENT DESTROY ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnerShip,function(req, res){
    //findByIdAndRemove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back");
       } else {
           req.flash("success","Comment Deleted!");
           res.redirect("/cargrounds/" + req.params.id);
       }
    });
});



//middleWare




module.exports=router;