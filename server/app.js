var express = require("express");
var app = express();
var path = require("path");
app.set("port", (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, './public')));

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "./public", "views/index.html"));
});

app.listen(app.get("port"), function(){
    console.log("app is running on port", app.get("port"));
});
app.get('/template', function(request, response){
    response.sendFile(path.join(__dirname, './public/views/template/add.html'));
});
app.get('/data', function(request, response){
    response.sendFile(path.join(__dirname, './public/assets/data/skillz.json'));
});
