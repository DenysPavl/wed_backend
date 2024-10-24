import AuthS from "../Services/AuthS.js";
import { validationResult } from "express-validator";
import 'dotenv/config';

class AuthController {

    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                throw new Error("Validation error!");
            }

            const {username, email, password} = req.body;
            return res.status(201).json(await AuthS.register(username, email, password));
        } 
        catch (e) {
           return res.status(500).json({message: e.message}); 
        }
    }

   async login(req, res) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                throw new Error("Validation error!");
            }

            const {email, password} = req.body;
            return res.status(200).json(await AuthS.login(email, password));
        }
        catch(e){
           return res.status(500).json({message: e.message});
        }
    }
}

export default new AuthController();
