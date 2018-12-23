# RESTfulBlog
* The purpose of this project is to show an example of RESTful routing in practice.

# All 7 RESTful routes
* Index     /blogs           GET    List all blogs
* New       /blogs/new       GET    Show new blog form
* Create    /blogs           POST   Create a new blog and redirect somewhere
* Show      /blogs/:id       GET    Show info about one specific blog
* Edit      /blogs/:id/edit  GET    Show edit form for one blog
* Update    /blogs/:id       PUT    Update a particular blog, then redirect somewhere
* Destroy   /blogs/id        DELETE Delete a particular blog, then redirect somewhere


# REST - a mapping between HTTP routes and CRUD

# CRUD
* CREATE
* READ 
* UPDATE 
* DESTROY

# Blog Index
* Set up the Blog app
* Creat the Blog model
* Add Index route and template

# Basic Layout
* Add header and footer partials
* Include semantic UI
* Add simple nav

# Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

# SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

# Edit/Update
* Add Edit route
* Add Edit form
* Add Update route
* Add Update form
* Add Method-Override

# Destroy
* Add Destory route
* Add Edit and Destroy links

# Updates
* Sanitize blog body
* Style Index

# How to Run
* 1. Use "Clone with HTTPS" URL to clone RESTfulBlog project
* 2. Ensure that Node.JS is installed by entering "node -v" into the command line
* 3. If needed, install Node.JS/NPM (https://nodejs.org/en/download/)
* 4. Run "npm install" in command line
* 5. Download MongoDB Server (https://www.mongodb.com/download-center) (Good YouTube videos to help: https://www.youtube.com/watch?v=3TvDUiclcFk&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=1 and https://www.youtube.com/watch?v=54iI586Iv_w&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=2)
* 6. Run "modgod" in separate command line in appropriate place to start server
* 7. Run "mongo" in separate command line in appropriate place to connect to MongoDB server
* 8. Run "node app.js" in separate command line in RESTfulBlog folder to start blog server
* 9. Preview app