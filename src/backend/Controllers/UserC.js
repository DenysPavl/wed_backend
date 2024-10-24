import UserService from "../Services/UserS.js";

class UserController{
    async getUserInfo(req,res){
        try {
            return res.status(201).json(await UserService.getInfo(req));
        } 
        catch (e) {
           return res.status(500).json({message: e.message}); 
        }
    }
}

export default new UserController();