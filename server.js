var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var app=express();
var path=require('path');
const { time } = require('console');

var staticMiddleware=express.static(path.join( __dirname, 'public'));

app.use(staticMiddleware);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/",(request, response)=>{
    response.sendFile(path.join(__dirname+"/index.html"));
});


app.get("/api/time",(request, response)=>{
    var path="time.json";
    fs.readFile(path,(err,data)=>{
        var time=JSON.parse(data);
        response.send(time);
    })
 });

 app.listen(1717);
console.log("Sever is listening on port 1717");