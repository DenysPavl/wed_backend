import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const { Schema } = mongoose;

const RoleSchema = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: uuid
        },
        name: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: false // Включение автоматического создания полей createdAt и updatedAt
    }
);

export default mongoose.model("Role",RoleSchema);