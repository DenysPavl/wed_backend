import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

class AuthMiddlewareHelper{

   async authCheck(req,res,next){
    try{

        const token = req.headers.authorization.split(' ')[1];
        if(!token)
            throw new Error("Токен відсутній");

        console.log(token);

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findOne({_id: decode._id});

        if(!user)
            throw new Error("This user is not found");

        if(!user.token === token)
            throw new Error("Error token valid");

        next();
    }
    catch(err){
        return res.status(400).json("You are not authorised!");
    }
    }

    roleCheck(role){  
        return function(req,res,next){
            try{
                const token = req.headers.authorization.split(' ')[1];

                const {roles: userRoles} = jwt.verify(token, process.env.JWT_SECRET_KEY);
                if (!userRoles.includes(role)){
                    throw new Error ("You do not have access to this action!");
                }
                next();
            }
            catch(e){
                return res.status(401).json("You do not have access to this action!");
            }
        }
    }

}

export default new AuthMiddlewareHelper();