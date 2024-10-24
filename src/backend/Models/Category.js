import Product from './Product.js';
import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const { Schema } = mongoose;

const Category = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: uuid
        },
        name: {
            type: String,
            require: true,
        },
        products:[ {
            type: String,
            ref: 'Product',
            default: null,
            require: true
        }]
    },{
        timestamps: true // Включение автоматического создания полей createdAt и updatedAt
    }
);

export default mongoose.model("Category",Category);