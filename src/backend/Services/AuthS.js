import User from "../Models/User.js";
import bcryptjs from "bcryptjs";
import Role from "../Models/Role.js";
import 'dotenv/config';
import JWTCreator from "./JWTCreator.js";

class AuthService{

    async register(username, email, password){
        const user = await User.findOne({email:email});
        if(user){
            throw new Error("This email is already registered!")
        }

        const hash_password = bcryptjs.hashSync(password,10);
        const role = await Role.findOne({'name': 'USER'});

        if(!role){
            throw new Error("Role Error!")
        }

        const Newuser = new User({username: username, email: email,password: hash_password, roles: [role.name]});
        await Newuser.save();

        const token = JWTCreator.createToken({_id: Newuser._id, email: Newuser.email, roles: Newuser.roles})
        await User.findByIdAndUpdate(Newuser._id,{ token: token});

        return {
            'message': "Successful registration ;)",
            'data': Newuser,
            'token': token
        };
    }

    async login(email, password){
        const user = await User.findOne({email:email})
        if(!user)
            throw new Error("This email is not registered!")
        
        const valid_password = bcryptjs.compareSync(password,user.password);
        if(!valid_password)
            throw new Error("Password incorrect!")

        const Newtoken = JWTCreator.createToken({_id: user._id, email: user.email, roles: user.roles});
        await User.findByIdAndUpdate(user._id,{ token: Newtoken});

        return {
            'token': Newtoken,
            'message': "Successful login ;)",
            'data': user
        };
    }
}

export default new AuthService();
