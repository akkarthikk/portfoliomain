import mongoose from "mongoose";

// This replaces the old "blog" Postgres table.
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    security_question: { type: String },
    security_answer: { type: String },
    role: { type: String },
});

const User = mongoose.model("User", userSchema, "blog"); // 3rd arg keeps the collection named "blog"

export default User;