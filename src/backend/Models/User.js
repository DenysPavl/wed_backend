import Comment from './Comment.js';
import Role from './Role.js';
import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: uuid
        },
        username: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            unique: true,
            require: true,
        },
        password:{
            type: String,
            require: true,
        },
        token:{
            type: String
        },
        roles:[
            {
                type: String,
                ref: 'Role',
                require: true
            }
        ],
        comments:[
            {
                type: String,
                ref: 'Comment',
                default:null,
                require:true}
        ]
    },
    {
        timestamps: true // Включение автоматического создания полей createdAt и updatedAt
    }
);

export default mongoose.model("User",UserSchema);