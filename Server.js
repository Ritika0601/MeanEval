//Require Http module
let http = require("http");
// reuire express module
let app = require ("express")(); 
// require body parser module 
let bodyParser = require ("body-parser"); 

//require route module
let userRoute = require("./Route/user"); 

app.use(bodyParser.urlencoded({extended : false })); 
app.use(bodyParser.json());

//url is setup for particular route 
app.use("/user",userRoute); 
//default url calling
app.get("/", function (req, res)
                               { 
	                             res.send("Server is running successfully") 
	                           }
	    ); 
 app.listen(8000);  //port number 
