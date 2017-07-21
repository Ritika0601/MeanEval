//Import the mongoose module
let mongoose= require ("mongoose"); 

//setup the mongodb connection with mongoose, affle is database here

mongoose.connect ( "mongodb://127.0.0.1:27017/affle", function ( err){ 
            if (err)  
             { 
               console.log ( err) 
             } 
               else 
            { 
           console.log ( "connected") 
            } 
             }) 


// Define a Schema
let Schema = mongoose.Schema; 

 //User Schema
 let userschema = new Schema({ 
                                  firstname : {type : String , required : true}, 
                                  lastname : {type : String , required : true}, 
                                   age: { type: Number, min: 18, max: 65, required: true },
                                  address: {type: String , required : true},
                                  email: { type: String, required : true, unique : true}
                                }); 

// add the model name and schema to the mongoose model.userschema is added to the mongoose instance, Name of the Model is "UserInfo".
let UserInfo = mongoose.model ( 'UserInfo', userschema); 

 module.exports={ UserInfo : UserInfo} 
