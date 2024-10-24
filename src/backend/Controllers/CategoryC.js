import Category from "../Models/Category.js";
import CategoryS from "../Services/CategoryS.js";

class CategoryController {

    async getCategorys(req, res) {
        try {
            const categorys = await Category.find(); 
            res.json(categorys); 
        } 
        catch (err) {
            res.status(500).json({ error: err.message }); 
        }
    }

   async getCategory(req, res) {
        if(!req.params.id){
            throw new Error("id empty!");
        }
        const category = await Category.findById(req.params.id);
        res.json(category);
    }

    async createCategory(req, res) {
        try{
            return res.status(200).json(await CategoryS.create(req.body));
    }
    catch(e){
        res.status(500).json(await e.message);
    }
    }

    async updateCategory(req, res) {
        try{
            res.status(200).json(await CategoryS.update(req.params.id,req.body));
        }
        catch(e){
            res.status(500).json(await e.message);
        }
    }

    async deleteCategory(req, res) {
        try{
            res.status(200).json(await CategoryS.delete(req.params.id));
        }
        catch(e){
            res.status(500).json(e.message);
        }
    }
}

export default new CategoryController();
