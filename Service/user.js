//Require Route Module
let userRoute = require('../Route/user'), 
//Require Model module
     userModel  = require('../Model/User'); 
      userinstance = userModel.UserInfo; 
  //Signup method to save user information
 let signup = (data, callback)=>{ 
 
        if(data.email.includes('@gmail.com')!=true)
        { 
          console.log("Email is invalid");
                    return; 
        }
        else 
        { 
          //variable to store user information 
          var userData ={ 
                          firstname : data.firstname, 
                          lastname : data.lastname, 
                          email    : data.email,
                          address : data.address,
                          age: data.age 
                        } 
  
        }  
       
 




/* save userdata to database using save() method*/ 
 var userdata = new userinstance( { firstname : data.firstname, lastname : data.lastname , email : data.email ,address:data.address , age:data.age}); 
    userdata.save( (err)=>{ 
            if(err) 
             { 
               callback ( err) 
               console.log(err); 
                return; 
              } 
             else 
              { 
                  console.log("User Data is stored successfully"); 
       
                  callback ( userData) 
              } 
               }) 
   
  }


//Exporting signup method 
 module.exports ={ signup : signup } 
