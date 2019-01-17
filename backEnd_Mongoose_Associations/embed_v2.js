var mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{ useNewUrlParser: true });

//=============Data Schema===============

var Post=require("./models/post")   //  "./" direct to current path
var User=require("./models/user")

//=======================================



User.create({
    email:"Bob@gmail.com",
    name:"Bob Flizer"
})

Post.create({
    title:"Cook recommendation part3 ",
    content:"dfasdfasefbalckc f ewsdf asdfsd  "
},function(err,post){
        User.findOne({email:"Bob@gmail.com"},function(err,foundUser){
            if(err){
                console.log(err)
            }else{
                foundUser.posts.push(post);
                foundUser.save(function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                })
            }
        })
    }
);

//================================
//Find User
// Find all posts for a single user
//================================
// User.findOne({email:"Bob@gmail.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

