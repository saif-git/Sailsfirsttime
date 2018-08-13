module.exports= function(req,res,next){
res.locals.flash = {};
	if(!res.session.flash) return next();

res.locals.flash = _.clone(req.session.flash);
	req.session.flash = {};

next();
};

