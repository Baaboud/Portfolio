const express = require("express");//return core express
const app = express();

// let server=null
// server = app.listen(3000,function(){
//     debug("listening on port" + app.get('port'))
// })
app.set("view engine", "ejs");//
app.set('views', 'public')
console.log("server strtaed");
app.use(express.static('public'));//type middelware exiet before respons //one method
// app.use(express.static('application/css'));//type middelware exiet before respons //tow method
app.get("/", (req, res) => {
    var langu = ['a', 'c', 'x'];
    res.render("index", {title: "Baaboud"});
});


app.listen('3000');