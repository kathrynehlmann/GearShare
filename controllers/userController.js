//Dependencies for User routers


//models


//================================
//Set SESSION Database

//Create User - data comes from signup page
//POST route /user


  //if user already exists then send an error message to the page


  //else go to the show page for the user -- inventory/show.ejs



//end user Create


//User Login - data comes from signup page
//POST /views/user/signup


  //if user does not exist in the database


  //call on the authenticate mthod from the user model (returns true or false)
  //for password check


  //if password matches:





  //if password does not match


//===================================

//export the router - required in server.js and for Middleware
module.exports = router;
