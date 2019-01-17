var mongoose = require("mongoose");

var Carground = require("./models/carground");
var Comment =require("./models/comment");
var data=[
    {
    name:"Audi",
    image:"https://images.unsplash.com/photo-1533629663071-038eb2b96fcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:"blah blah blah"
    },
    {
    name:"Lamborghini",
    image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:"blah blah blah"
    },
    {
    name:"Benz",
    image:"https://images.unsplash.com/photo-1533629663071-038eb2b96fcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:"blah blah blah"
    }
    
]

function seedDB(){
   //Remove all campgrounds
   Carground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Carground.create(seed, function(err, data){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                data.comments.push(comment);
                                data.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}


module.exports=seedDB;