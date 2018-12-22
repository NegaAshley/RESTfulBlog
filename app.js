var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");
    
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true });

//App config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

//Compile into model
var Blog = mongoose.model("Blog", blogSchema);

//Root route
app.get("/", function(req, res){
    res.redirect("/blogs");
});

//Index route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, allBlogs){
        if(err){
            console.log("Error getting blogs from database.")
            console.log(err)
        }else{
            res.render("index", {blogs:allBlogs});
        }
    });
});

//Create blogs route
app.post("/blogs", function(req, res){
    var newBlogTitle = req.body.blog.title;
    var newBlogImage = req.body.blog.image;
    var newBlogBody = req.body.blog.body;
    var newBlog = {title: newBlogTitle, image: newBlogImage, body: newBlogBody};
    Blog.create(newBlog, function(err, blog){
       if(err){
           console.log("Error creating blog post.");
           console.log(err);
       }else{
           console.log("Blog post saved to database.");
           console.log(blog);
           res.redirect("/blogs");
       } 
    });
});

//New blog route
app.get("/blogs/new", function(req, res){
    res.render("newBlog");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog server has started!");
});