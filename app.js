var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer");

var url = process.env.DATABASEURL;
mongoose.connect(url);

//App config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

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
    req.body.blog.body = req.sanitize(req.body.blog.body);
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

//Show blog route
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           console.log("Error getting blog by ID.");
           console.log(err);
           res.redirect("/blogs");
       }else{
           res.render("showBlog", {blog: foundBlog});
       }
    });    
});

//Edit blog route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log("Error getting blog by ID.");
            console.log(err);
            res.redirect("/blogs")
        }else{
            res.render("editBlog", {blog: foundBlog});
        }
    }); 
});

//Update blog route
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            console.log("Error updating blog post.")
            console.log(err);
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//Delete blog route
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log("Error deleting blog post.");
            console.log(err);
            res.redirect("/blogs" + req.params.id);
        }else{
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog server has started!");
});