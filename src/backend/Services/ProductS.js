import Product from "../Models/Product.js";
import Category from "../Models/Category.js";

class ProductService{
    async delete(id){
        if(!id){
            throw new Error("id empty!");
        }
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            throw new Error("product is empty");
        }
        return product;
    }

    async update(id,body){
        if(!id){
            throw new Error("id empty!");
        }
        const product = await Product.findByIdAndUpdate(id,body);
        return product;
    }
    async create(body){
        const newProduct ={
            id: Product.length + 1,
            name: body.name,
            price: body.price,
            category: body.category,
            image: body.image ? body.image : ""
        };
        if(!Category.findOne({name: newProduct.category})){
            throw new Error("This Category is undefined")
        }
        const product = await Product.create(newProduct);
        await Category.findOneAndUpdate({name: product.category}, {$push: {"products": product._id }}) ///Update Category DB Table
        return product;
    }
}

export default new ProductService();
