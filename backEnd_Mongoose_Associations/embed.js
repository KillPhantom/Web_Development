var mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{ useNewUrlParser: true });

//=============Data Schema===============

var postSchema= new mongoose.Schema({
    title:String,
    content:String
});

var Post=mongoose.model("Post",postSchema);

var UserSchema =new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
});

var User=mongoose.model("User",UserSchema);


//========================================


var newUser=new User({
    email:"Edward@brwon.edu",
    name:"Edward dunky"
    
});

newUser.posts.push({
    title:"This is title",
    content:"This is fucking content"
})


newUser.save(function(err,user){
    if (err){
        console.log(err)
    }else{
        console.log(user)
    }
})

// var newPost=new Post({
//     title:"Review of Glaxy",
//     content:"Ahahaha"
// })