import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    phone: String,
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});