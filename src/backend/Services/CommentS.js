import Comment from "../Models/Comment.js";

class CommentService{
    async delete(id){
        if(!id){
            throw new Error("id empty!");
        }
        const comment = await Comment.findByIdAndDelete(id);

        if(!comment){
            throw new Error("Comment is empty");
        }
        return comment;
    }

    async update(id,body){
        if(!id){
            throw new Error("id empty!");
        }
        const comment = await Comment.findByIdAndUpdate(id,body);
        return comment;
    }
    async create(body){
        const newComment ={
            rating: body.rating,
            author: body.author,
            text: body.text,
            product: body.product
        };
        const comment = await Comment.create(newComment);
        return comment;
    }
}

export default new CommentService();
