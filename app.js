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

Blog.create({
    title: "Test Blog",
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/20106290_10159031428835254_5819301612392045243_n.jpg?_nc_cat=110&_nc_ht=scontent-ort2-1.xx&oh=197585cbbcfb2c93bb53eb9c972903d8&oe=5CD6EA96",
    body: "This is the body."
});

//Index route
app.get("/blogs", function(req, res){
   res.render("index"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog server has started!");
});