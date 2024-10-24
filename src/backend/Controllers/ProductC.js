import Product from '../Models/Product.js';
import ProductS from '../Services/ProductS.js';


class ProductController {

    async getProducts(req, res) {
        try {
            const products = await Product.find(); 
            res.json(products); 
        } catch (err) {
            res.status(500).json({ error: err.message }); 
        }
    }

   async getProduct(req, res) {
        console.log(req.params.id);
        const product = await Product.findById(req.params.id);
        res.json(product);
    }

    async createProduct(req, res) {
        try{
        return res.json(await ProductS.create(req.body));
        }
        catch(e){
        res.status(500).json(e.message);
        }
    }

    async updateProduct(req, res) {
        try{
            res.status(200).json(await ProductS.update(req.params.id, req.body));
        }
        catch(e){
            res.status(500).json(e.message);
        }
    }

    async deleteProduct(req, res) {
        try{
            res.status(200).json(await ProductS.delete(req.params.id));
        }
        catch(e){
            res.status(500).json(e.message);
        }
    }
}

export default new ProductController();
