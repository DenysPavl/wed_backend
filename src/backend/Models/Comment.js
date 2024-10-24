import User from './User.js';
import Product from './Product.js';
import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const { Schema } = mongoose;

const Comment = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: uuid
        },
        rating: {
            type: String,
            min: 0,
            max: 5,
            require: true,
            default: 0
        },
        text: {
            type: String,
            require: true,
        },
        author:{
            type: String,
            default:uuid,
            ref: 'User',
            require: true
        },
        product:{
            type: String,
            default:uuid,
            ref: 'Product',
            require: true
        }
    },
    {
        timestamps: true // Включение автоматического создания полей createdAt и updatedAt
    }
);

export default mongoose.model("Comment",Comment);