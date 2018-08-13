/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  'new':function(req ,res ){
  	res.locals.flash = _.clone(req.session.flash);
  	res.view();
  	req.session.flash = {};
  },


//   create: function (req ,res ,next){
//   	user.create(req.params.all(), function UserCreated(err ,newUser){

//    if(err) {console.log("we have a fucking problem here");
// return next(err);}

// console.log("we are redirect our project");
//    res.json(newUser);
//    res.redirect('/user/show');
//   	});
//   }

/*  create:function(req,res,next){
  	                var param = req.body.name;
  	User.create(param , function userCreate(err,user){
if(err) {
 console.log(err);
 res.send("error :Sorry we have a problem here");
return err;}

console.log("we are redirect our project");
  		res.redirect('/user/show');
  		 res.forbidden();
  		 res.json(user);
  	});
  },*/

/*  show:function(res,res,next){
  	user.findOne(req.params('id'),function foundUser(err,user){
if(err) return next(err);
  if(user) return next();

     res.view({
	   user: user
         });

  	});
  }*/
   create:function(req,res){
//
               // var paramid = req.body.id;
//
                var paramname = req.body.name;
                var paramemail = req.body.email;
                var parampass = req.body.password;
                User.create({ name :paramname,email:paramemail,password:parampass}).exec(function(err,user){
                        //console.log(success);
                    if(err){

                        res.send("Error:Sorry!Something went Wrong");

             req.session.flash = {
	              err : err
                             }
                    }else{
                    	console.log(user.name);


                        res.send(user);
                        //res.json("user :"+user);
                        //res.forbidden();
                       return res.redirect(301,"/user/show");

        req.session.flash={};
                    }

                });
    }  ,


/*     forestay: require('sails-generate-forestay').forestay.router,
  test:function(req,res){
    Car.find().exec(function(err,car){
      car.forEach(function(c){
        console.log(foo)
      })
      res.send('we found some things', car.length)
    })
  }*/


/*    show:function(res,res,next){

  	user.findOne(req.params('id'),function foundUser(err,user){
if(err) return next(err);
  if(user) return next();

     res.view({
	   user: user
         });

  	});
  } */
};

