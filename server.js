var express = require('express');  //Node_module

var app = express();

app.set('views',__dirname + '/server/views'); //sets path for server to look into


app.set('view engine','jade');

app.use(express.static('public')); //static route handling

//Routes
app.get('/',function(req,res){
	res.render('index');  //req=request res=response =>HTTP REQUEST and RESPONSE objects
})

app.listen(3020);

console.log("Express Server is listening at port 3020");