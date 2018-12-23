# RESTfulBlog

# All 7 RESTful routes
* Index     /blogs           GET    List all blogs
* New       /blogs/new       GET    Show new blog form
* Create    /blogs           POST   Create a new blog and redirect somewhere
* Show      /blogs/:id       GET    Show info about one specific blog
* Edit      /blogs/:id/edit  GET    Show edit form for one blog
* Update    /blogs/:id       PUT    Update a particular blog, then redirect somewhere
* Destroy   /blogs/id        DELETE Delete a particular blog, then redirect somewhere


* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

Blog

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