class authMiddleware{
    async isAuthenticated(req,res,next){
        if(req.isAuthenticated()) process.env.USER_ID = req.session.passport.user;
        else process.env.USER_ID = 1;
        
        return next();
    }
}

module.exports = new authMiddleware();