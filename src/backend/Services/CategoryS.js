import Category from "../Models/Category.js";

class CategoryService{
    async delete(id){
        if(!id){
            throw new Error("id empty!");
        }
        const category = await Category.findByIdAndDelete(id);

        if(!category){
            throw new Error("Category is empty");
        }
        return "Success";
    }

    async update(id,body){
        if(!id){
            throw new Error("id empty!");
        }

        await Category.findByIdAndUpdate(id,body);
        return "Success";
    }
    async create(body){

        const category = await Category.findOne({name: body.name});
        if(category){
            throw new Error("Error: This category already exists!")
        }
        console.log(category);

        const newCategory ={
            name: body.name,
            products:[]
        };
        await Category.create(newCategory);
        return "Success";
    }
}

export default new CategoryService();
