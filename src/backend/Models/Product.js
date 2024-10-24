import mongoose from 'mongoose';
import Comment from './Comment.js';
import Category from './Category.js';
import { uuid } from 'uuidv4';
const { Schema } = mongoose;

const Product = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: uuid
        },
        id:{
            type: String,
            default: uuid
        },
        name: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        category: {
            type: String,
            ref: 'Category',
            default:uuid,
            require:true
        },
        comments:[{
            type: String,
            ref: 'Comment',
            default:uuid,
            require:false}
        ],
        text:{
            type: String,
            require:true
        },
        image:{
            type: String,
            default:"",
            require:false
        }
    },{
        timestamps: true // Включение автоматического создания полей createdAt и updatedAt
    }
);

export default mongoose.model("Product",Product);