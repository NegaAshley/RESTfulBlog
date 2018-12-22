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

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog server has started!");
});