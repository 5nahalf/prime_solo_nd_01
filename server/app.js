var express = require("express");
var app = express();
var path = require("path");
var hello = require("./hello")
app.set("port", (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, './public')));

//app.get('/template', function(request, response){
//    response.sendFile(path.join(__dirname, './public/views/template/add.html'));
//});
//app.get('/data', function(request, response){
//    response.sendFile(path.join(__dirname, './public/assets/data/skillz-data.json'));
//});
app.get('/data', function(request, response){
    console.log("/data function is happening");
    var file = '/assets/data/skillz-data.json';
    response.sendFile(path.join(__dirname, './public', file));
});

app.get('/template', function(request, response){
    console.log("/template function is happening");
    var file = '/views/template/add.html';
    response.sendFile(path.join(__dirname, './public', file));
    //response.send(hello());
});
app.get("/*", function(request, response){
    response.sendFile(path.join(__dirname, "./public", "views/index.html"));

});

app.listen(app.get("port"), function(){
    console.log("app is running on port", app.get("port"));
});
