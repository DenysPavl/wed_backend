import Comment from "../Models/Comment.js";
import CommentS from "../Services/CommentS.js";
import jwt from "jsonwebtoken";


class CommentController {

    async getComments(req, res) {
        try {
            const comments = await Comment.find();
            res.json(comments);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getCommentsByAuthorId(req, res) {
        try {
           /* if(!req.params.userId){
                throw new Error("Id empty!")
            }*/
         //const comments = await Comment.find({ author: req.params.userId});
            const decode = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET_KEY);
            const comments = await Comment.find({ author: decode._id});

            res.json(comments);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

   async getComment(req, res) {
        console.log(req.params.id);
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    }

    async createComment(req, res) {
        try{
            const decode = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET_KEY);

            return res.json(await CommentS.create({rating: req.body.rating, text: req.body.text, product: req.body.product, author: decode._id}));
        }
        catch(e){
            res.status(500).json(e.message);
        }
    }

    async updateComment(req, res) {
        try{
            res.status(200).json(await CommentS.update(req.params.id,req.body));
        }
        catch(e){
            res.status(500).json(e.message);
        }
    }

    async deleteComment(req, res) {
        try{
            res.status(200).json(await CommentS.delete(req.params.id));
        }
        catch(e){
            res.status(500).json(e.message);
        }
    }
}

export default new CommentController();
