 var express= require("express"),
     bodyParser=require("body-parser"),
     mongoose = require("mongoose"),
     methodOverride=require("method-override"),
     expressSanitizer = require("express-sanitizer");
 var app = express();
mongoose.connect("mongodb://localhost:27017/blogs",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use(express.static("public"));//serve custome style sheet
app.use(methodOverride("_method"));// use this to override html request
app.use(expressSanitizer());
// Model Configuration
var blogSchema= new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created: {
        type: Date,
        default:Date.now()
    }
});

var Blog=mongoose.model("Blog",blogSchema);

//Restful routes
app.get("/",function(req,res){
    res.redirect("/blogs");
})

app.get("/blogs",function(req,res){
    Blog.find({},function(err,blogs){
        if(err){
            console.log(err);
        }else{
            res.render("index",{blogs:blogs});
        }
    })

})
//New ROUTE

app.get("/blogs/new", function(req, res) {
    res.render("new");
})

//CREATE ROUTE
app.post("/blogs",function(req,res){
    //create blog
    req.body.blog.body=req.sanitize(req.body.blog.body);//remove the possible <script></script>
    Blog.create(req.body.blog,function(err,newBlog){
        if (err){
            res.render("new")
        }else{
             //redirect
            res.redirect("/blogs");
        }
    })
   
})


// show route
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blogs")
        }else{
            res.render("show",{blog:foundBlog});
        }
    })
})


app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Blog Server Has Started!!")
})

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err,foundBlog){
        if(err){
            res.redirect("/blogs")
        }else{
            res.render("edit",{blog:foundBlog})
        }
    })

})

// UPDATE ROUTE
app.put("/blogs/:id",function(req,res){
    req.body.blog.body=req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedblog){
        if(err){
            res.redirect("/blogs")
        }else{
            res.redirect("/blogs/"+req.params.id);
        }
    })
})

// DELETE ROUTE

app.delete("/blogs/:id", function(req,res){
    //destroy
    Blog.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    })
    
    //redirect
})