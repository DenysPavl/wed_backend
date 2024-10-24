import { json } from "express";
import User from "../Models/User.js";
import jwt from "jsonwebtoken";

class UserService {
  async getInfo(body) {
    if(!body)
      throw new Error("Token is undefind");
      
    try {
      const decode = jwt.verify(
        body.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET_KEY
      );
      const user = User.findOne({ _id: decode._id });

      if (user) return user;
      else throw new Error("User don't find!");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserService();
