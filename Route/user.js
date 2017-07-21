//Require express module
let express = require ("express"),
    router  = express.Router(), 

    userService = require('../Service/user');   //require service module

//User Detail "User SignUp"
router.post('/signup', (req,res)=> { 
                        userService.signup(req.body,(data)=>{
                        	res.send(data);
                           }); 
                      }); 
module.exports = router;  
